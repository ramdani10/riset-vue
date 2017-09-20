/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import apolloClient from '../../apollo/index.js'
import router from '../../router'
import gql from 'graphql-tag'
import { ApiHttp } from './../../helpers/http_services'
import { authenticated } from './../../helpers/auth_services'

Vue.use(Vuex);

// apolloClient.subscribe returns an Observable instance
// I've put the observer and observable here for simplicity but this should go into its own module
// const fruitsSubscriptionObservable = apolloClient.subscribe({
//   query: gql`
//     subscription {
//       Fruit {
//         mutation
//         node {
//           id
//           name
//           color {
//             name
//           }
//         }
//         previousValues {
//           id
//           }
//       }
//     }
//   `
// })

// let fruitsSubscriptionObserver

const store = new Vuex.Store({
  state: {
    register: {},
  },
  register: {},
  mutations: {
    GET_USERS(state, fruits){
      console.log(state);
      console.log(fruits);
      // having an object instead of an array makes the other methods easier
      // since we can use Vue.set() and Vue.delete()
      // const object = {};
      // fruits.map((fruit) => {
      //   object[fruit.name] = fruit;
      // });
      // state.fruits = object;
      // state.register = fruits
      // console.log(state);
    },
    ADD_USERS(state, fruit){
      Vue.set(state.fruits, fruit.id, fruit);
    },
    UPDATE_FRUIT(state, fruit){
      Vue.set(state.fruits, fruit.id, fruit);
    },
    DELETE_FRUIT(state, fruit){
      Vue.delete(state.fruits, fruit.id);
    },
    CHECK_AUTHENTICATED(state, user)
    {
      this.state.token = user.token
    }
  },
  actions: {
    getFruits(context){
      apolloClient.query({
        query: gql`
          {
            users {
              email
            }
          }
        `
      }).then((result) => {
        console.log(result);
        context.commit('GET_USERS', result);
      });
    },
    checkAutenticated() {
      console.log('masuk sini');
      console.log('cehck auth '+authenticated())
    },
    addUser(context, data) {
      this.register = data
      apolloClient.mutate({
        // Query
        mutation: gql` mutation NewUser ($avatar: String!, $name: String!, $email: String!, $password: String!, $first_name: String!, $last_name: String!) { 
          newUser(avatar: $avatar, name: $name, email: $email, password: $password, first_name: $first_name, last_name: $last_name) {
            id
            name
            email
            user_profiles{
              avatar
              first_name
              last_name
            }
          }
        
        }`,
        variables: {
          name: this.register.first_name+' '+this.register.last_name,
          email: this.register.email,
          password: this.register.password,
          first_name: this.register.first_name,
          last_name: this.register.last_name,
          avatar: 'http://lorempixel.com/640/480/?62970'
        }
      }).then((data) => {
        // Result
        router.push('/login')
        Vue.toasted.global.success({message: 'Register has been successfuly, Please login with your account'}).goAway(3000)
      }).catch((error) => {
        const errorMessage = JSON.parse(JSON.stringify(error))
        Vue.toasted.global.error({message: errorMessage.graphQLErrors[0].message}).goAway(3000)
        // We restore the initial user input
        this.register = this.register
        // this.newTag = newTag
      })
    },
    login(context, data) {
      ApiHttp.post(`/graphql/login`,
        data
      )
      .then((response) => {
        console.log(response.token)
        // Vue.ls.set('token', response.token)
        localStorage.setItem('token', response.token)
        router.push('/')
        Vue.toasted.global.success({message: 'Login has been successfuly'}).goAway(3000)
        // credentials.token = response.data.token
        // credentials._id = response.data._id
        // return ApiHttp.get(`/user/${credentials._id}`, {
        //   headers: {
        //     'token': credentials.token
        //   }
        // })
      // }).then((response) => {
      //   console.log(response);
        // credentials.username = `${response.data.first_name} ${response.data.last_name}`
        // credentials.email = response.data.email
        // storeUserToken(credentials)
        // commit('setAuthenticated', true)
        // commit('loadingBar', false)
        // payload.router.push('/intro')
        // Vue.toasted.global.success({message: 'Success For Login'}).goAway(3000)
      })
      .catch((error) => {
        var message = ''

        if (error.response) {
          let data = error.response.data
          console.log(data.error);
          message = 'Oops.. '+data.error
          // if (data.errors[0].ERR_CODE === 'E109') {
          //   message = 'Oops.. Username or Password May be wrong'
          // }
        }

        Vue.toasted.global.error({message: message}).goAway(3000)

        // commit('loadingBar', false)
        // Vue.toasted.error(message).goAway(3000)
      })
    }
    // You call this action to start the sunscription
    // subscribeToFruits(context){
    //   fruitsSubscriptionObserver = fruitsSubscriptionObserver.subscribe({
    //     next(data){
    //       // mutation will say the type of GraphQL mutation `CREATED`, `UPDATED` or `DELETED`
    //       console.log(data.Fruit.mutation);
    //       // node is the actual data of the result of the GraphQL mutation
    //       console.log(data.Fruit);
    //       // then call your store mutation as usual
    //       switch (data.Fruit.mutation) {
    //         case 'CREATED':
    //           context.commit('ADD_FRUIT', data.Fruit.node);
    //           break;
    //         case 'UPDATED':
    //           context.commit('UPDATE_FRUIT', data.Fruit.node);
    //           break;
    //         case 'DELETED':
    //           context.commit('DELETE_FRUIT', data.Fruit.previousValues);
    //           break;
    //       }
    //     },
    //     error(error){
    //       console.log(error);
    //     }
    //   });
    // },
    // You call this action to stop the subscription
    // unsubscribeFromFruits(context){
    //   if (fruitsSubscriptionObserver) {
    //     fruitsSubscriptionObserver.unsubscribe();
    //     fruitsSubscriptionObserver = null;
    //   }
    // },
  }
});

export default store;