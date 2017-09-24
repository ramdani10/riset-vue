/* eslint-disable */
import Vue from 'vue'
import apolloClient from '../../apollo/index.js'
import router from '../../router'
// import gql from 'graphql-tag'
import { ApiHttp } from './../../helpers/http_services'
import { authenticated } from './../../helpers/auth_services'

  const state = {
    workersData: [],
    workersDataTet: true
  }

 const mutations = {
    SET_WORKERS(state, data){
      state.workersData = data
     // console.log(state.workersData)
    },
    CHECK_AUTHENTICATED(state, user)
    {
      state.token = user.token
    }
  }

  const actions = {
    checkAutenticated() {
      console.log(authenticated())
    },
    getWorkers({commit, dispatch}, data) {
      ApiHttp.get(`/worker`)
      .then((response) => {
        commit('SET_WORKERS', response.data);
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

  const getters = {
    getListWorker: state => state.workersData,
    getListWorkerTest: state => state.workersDataTet
}

export default {
  state,
  mutations,
  actions,
  getters
}
