// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import './apollo'

// import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client'
// import VueApollo from 'vue-apollo';

import BootstrapVue from 'bootstrap-vue'
import Icon from 'vue-awesome/components/Icon'

/* ...there may be other imports here */
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

import store from './store'

Vue.use(BootstrapVue)
Vue.use(Vuex) // Install Vuex

Vue.component('icon', Icon)

Vue.config.productionTip = false

// Create the apollo client
// const apolloClient = new ApolloClient({
//   networkInterface: createNetworkInterface({
//     uri: 'http://localhost:8080/graphql',
//     transportBatching: true,
//   }),
//   queryTransformer: addTypename,
//   dataIdFromObject: r => r.id,
// });

// Install the vue plugin
// With the apollo client instance

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
