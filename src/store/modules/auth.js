/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import apolloClient from '../../apollo/index.js'

import gql from 'graphql-tag'

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
  mutations: {
    SET_FRUITS(state, fruits){
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
  },
  actions: {
    getFruits(context){
      apolloClient.query({
        query: gql`
          {
            mypost {
              id
              title
            }
          }
        `
      }).then((result) => {
        console.log(result);
        context.commit('SET_FRUITS', result);
      });
    },
    addUser(context, data) {
      const register = data
      apolloClient.mutate({
        // Query
        /*
        mutation: gql`mutation createMyPost ($userId: Int!, $title: String!, $body: String!) {
          createMyPost (userId: $userId, title: $title, body: $body){
            id
          } 
        }`,
        */
        
        mutation: gql` mutation NewUser ($name: String, $email: String, $password: String) { 
          newUser(name: $name, email: $email, password: $password, first_name: "first_name", last_name: "last name") {
            id
            name
            email
          }
        
        }`,
        
        // Parameters
        // variables: {
        //   userId: 1,
        //   title: register.email,
        //   body: register.password,
        // }
        variables: {
          name: "tstdfasf",
          email: register.email,
          password: register.password,
        }
      }).then((data) => {
        // Result
        console.log('result');
        console.log(data)
      }).catch((error) => {
        // Error
        console.error(error)
        // We restore the initial user input
        // this.newTag = newTag
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