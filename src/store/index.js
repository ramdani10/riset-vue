import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import auth from './modules/auth'
import apolloClient from '../apollo/index.js'
import gql from 'graphql-tag'
// import openwrite from './modules/openwrite'
// import page from './modules/page'
// import organization from './modules/organization'
// import books from './modules/books'
// import eplatform from './modules/eplatform'
// import media from './modules/media'
// import toashManager from './modules/toash-manager'
// import createLogger from '../plugins/logger'
// import shared from './modules/shared'

// import writes from './modules/writes'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  apolloClient,
  gql,
  modules: {
    auth
    // books,
    // eplatform,
    // page,
    // organization,
    // auth,
    // media,
    // toashManager,
    // writes,
    // shared
  }
  // strict: debug
  // plugins: debug ? [createLogger()] : []
})
