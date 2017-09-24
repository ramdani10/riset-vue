/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import apolloClient from '../apollo/index.js'
import gql from 'graphql-tag'

import toashManager from './modules/toast_manager'
import auth from './modules/auth'
import worker from './modules/worker'



Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  apolloClient,
  gql,
  modules: {
    auth,
    toashManager,
    worker
    // books,
    // eplatform,
    // page,
    // organization,
    // auth,
    // media,
    // writes,
    // shared
  }
  // strict: debug
  // plugins: debug ? [createLogger()] : []
})
