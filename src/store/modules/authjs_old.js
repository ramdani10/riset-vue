// import Vue from 'vue'
// import Vuex from 'vuex'
// import * as actions from './actions'
// import auth from './modules/auth'
// import apolloClient from '../apollo/index.js'
// import gql from 'graphql-tag'
import apolloClient from '../../apollo/index.js'
import gql from 'graphql-tag'

/* eslint-disable */

// import Vue from 'vue'
// import { indexOf } from 'lodash'
// import { ApiHttp } from './../../shared/http-service'
// import { storeUserToken, destroyUserToken, hasValidUser, getUser } from './../../shared/auth-service'
// import { REGISTER, DEBUG } from '../../env/index'

const state = {
  authUser: 'testing',
  count: 1
  // loadingBar: false,
  // authenticated: false
}

const fruitsSubscriptionObservable = apolloClient.subscribe({
  query: gql`
    subscription {
      Fruit {
        mutation
        node {
          id
          name
          color {
            name
          }
        }
        previousValues {
          id
          }
      }
    }
  `
})

let fruitsSubscriptionObserver

const getters = {
  // loadingBar: state => state.loadingBar,
  // authenticated: state => state.authenticated,
  // userData: state => getUser()
}

/*
const mutations = {
  authUser (state, {username, token}) {
    state.authUser = {
      username: username,
      token: token
    }
  },
  loadingBar (state, status) {
    state.loadingBar = status
    // if (status) {
    //   Loading.show({delay:0})
    // } else {
    //   Loading.hide({delay:0})
    // }
  },
  setAuthenticated (state, status) {
    state.authenticated = status
  }
}

*/

const actions = {
  registerNewUser ({commit}, payload) {
    console.log(fruitsSubscriptionObservable)
    // return payload
    // return ApiHttp.post(REGISTER(), payload)
    fruitsSubscriptionObserver = fruitsSubscriptionObserver.subscribe({
       next (data){
        console.log(data)
        // mutation will say the type of GraphQL mutation `CREATED`, `UPDATED` or `DELETED`
        console.log(data.Fruit.mutation)
        // node is the actual data of the result of the GraphQL mutation
        console.log(data.Fruit)
        // then call your store mutation as usual
        // switch (data.Fruit.mutation) {
        //   case 'CREATED':
        //     context.commit('ADD_FRUIT', data.Fruit.node);
        //     break;
        //   case 'UPDATED':
        //     context.commit('UPDATE_FRUIT', data.Fruit.node);
        //     break;
        //   case 'DELETED':
        //     context.commit('DELETE_FRUIT', data.Fruit.previousValues);
        //     break;
        // }
      },
      error(error){
        console.log(error)
      }
    })
  }
  /*
  authenticate ({ commit }, payload) {
    commit('loadingBar', true)
    const { username, password } = payload.auth
    const credentials = {}
    ApiHttp.post(`/login?username=${username}&password=${password}`)
      .then((response) => {
        credentials.token = response.data.token
        credentials._id = response.data._id
        return ApiHttp.get(`/user/${credentials._id}`, {
          headers: {
            'token': credentials.token
          }
        })
      }).then((response) => {
        credentials.username = `${response.data.first_name} ${response.data.last_name}`
        credentials.email = response.data.email
        storeUserToken(credentials)
        commit('setAuthenticated', true)
        commit('loadingBar', false)
        payload.router.push('/intro')
        Vue.toasted.global.success({message: 'Success For Login'}).goAway(3000)
      })
      .catch((error) => {
        var message = ''

        if (error.response) {
          let data = error.response.data

          if (data.errors[0].ERR_CODE === 'E109') {
            message = 'Oops.. Username or Password May be wrong'
          }
        }

        commit('loadingBar', false)
        Vue.toasted.error(message).goAway(3000)
      })
  },
  authLogout ({ commit }, payload) {
    destroyUserToken()
    commit('setAuthenticated', false)
    payload.push('/login')
  },
  authUserDetect ({ commit }) {
    if (hasValidUser()) {
      commit('setAuthenticated', true)
    }
  },
  loadingBar ({ commit }, payload) {
    commit('loadingBar', payload)
  },
  setAuthenticated ({ commit }, payload) {
    commit('setAuthenticated', payload)
  },
  removeUserToken ({ commit, dispatch }, router) {
    commit('setAuthenticated', false)
    dispatch('showToash', { message: 'Session expired', type: 'error' })
    destroyUserToken()

    if (router) {
      router.push('/login')
    }
  },
  handleErrorResponse ({ commit, dispatch }, payload) {
    if (payload.errors.response) {
      let response = payload.errors.response.data.error || payload.errors.response.data.errors
      let errorTypes = ['TOKEN_EXPIRATION_ERROR', 'INVALID_TOKEN_ERROR']

      if (indexOf(errorTypes, response.ERROR_CODE) !== -1) {
        dispatch('removeUserToken', payload.router)
      }
      else {
        dispatch('showToash', { message: response.ERROR_DESCRIPTION, type: 'error' })
      }
    }
    else {
      let errorMessage

      if (DEBUG) {
        errorMessage = payload.errors
      }
      else {
        errorMessage = 'Oops! something may be wrong'
      }

      dispatch('showToash', { message: errorMessage, type: 'error' })
    }
  }
  */
}

export default {
  state,
  getters,
  apolloClient,
  gql,
  fruitsSubscriptionObserver,
  // mutations,
  actions
}
