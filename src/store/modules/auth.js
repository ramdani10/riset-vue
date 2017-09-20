/* eslint-disable */
import Vue from 'vue'
// import Vuex from 'vuex'
// import Toasted from 'vue-toasted'
import apolloClient from '../../apollo/index.js'
import router from '../../router'
import gql from 'graphql-tag'
import { ApiHttp } from './../../helpers/http_services'
import { authenticated, storeUserToken } from './../../helpers/auth_services'

// Vue.use(Vuex);
// Vue.use(Toasted)
  const state = {
    register: {}
  }

 const mutations = {
    GET_USERS(state, fruits){
      console.log(state);
      console.log(fruits);
    },
    ADD_USERS(state, fruit){
      Vue.set(state.fruits, fruit.id, fruit);
    },
    CHECK_AUTHENTICATED(state, user)
    {
      state.token = user.token
    }
  }

  const actions = {
    getFruits({commit}){
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
        commit('GET_USERS', result);
      });
    },
    checkAutenticated() {
      console.log(authenticated())
    },
    addUser({commit}, data) {
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
        router.push('/login')
        dispatch('showToash',{message: 'Register has been successfuly, Please login with your account',type: 'success'})
        // Vue.toasted.global.success({message: 'Register has been successfuly, Please login with your account'}).goAway(3000)
      }).catch((error) => {
        const errorMessage = JSON.parse(JSON.stringify(error))
        Vue.toasted.global.error({message: errorMessage.graphQLErrors[0].message}).goAway(3000)
        this.register = this.register
      })
    },
    login({commit, dispatch}, data) {
      ApiHttp.post(`/auth/signin`,
        data
      )
      .then((response) => {
        console.log(response)
        storeUserToken(response.data);
        router.push('/')
        dispatch('showToash',{message: 'Register has been successfuly, Please login with your account',type: 'success'})
      })
      .catch((error) => {
        var message = ''

        if (error.response) {
          let data = error.response.data
          console.log(data.error);
          message = 'Oops.. '+data.error
        }
        dispatch('showToash',{message: message,type: 'error'})
      })
    },
    signUp({commit, dispatch}, data) {
      ApiHttp.post(`/auth/signup`,
        data
      )
      .then((response) => {
        console.log(response)
        storeUserToken(response.data);
        router.push('/')
        dispatch('showToash',{message: 'SignUp has been successfuly',type: 'success'})
      })
      .catch((error) => {
        var message = ''

        if (error.response) {
          let data = error.response.data
          console.log(data.error);
          message = 'Oops.. '+data.error
        }
        dispatch('showToash',{message: message,type: 'error'})
      })
    }
  }

export default {
  state,
  mutations,
  actions
}
