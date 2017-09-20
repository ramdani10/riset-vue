// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import Toasted from 'vue-toasted'

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
Vue.use(Toasted)

Vue.component('icon', Icon)

Vue.config.productionTip = false

// register the toast with the custom message
Vue.toasted.register('error',
    (payload) => {
        // if there is no message passed show default message
        if (! payload.message) {
    	    return "Oops.. Something Went Wrong.."
        }
        // if there is a message show it with the message
        return "Oops.. " + payload.message;
    },{
    type: 'error'	
    }    
)

Vue.toasted.register('success',
    (payload) => {
        // if there is no message passed show default message
        if (! payload.message) {
    	    return "Oops.. Something Went Wrong.."
        }
		
        // if there is a message show it with the message
        return payload.message;
    },{
    type: 'success'	
    }    
)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
