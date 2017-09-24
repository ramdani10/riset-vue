<template>
    <div class="container" >
        <div class="row justify-content-center">
          <div class="col-xs-12 col-sm-8 col-md-4  col-sm-offset-2 col-md-offset-4">
            <div class="panel panel-default">
                <div class="panel-heading">
                        <h3 class="panel-title">Sign In <small></small></h3>
                        </div>
                        <div class="panel-body">
                        <form role="form">
                            <div class="form-group">
                                <input type="text" v-model="register.email" id="email" class="form-control input-sm" placeholder="Email">
                            </div>

                            <div class="form-group">
                                <input type="password" v-model="register.password" id="password" class="form-control input-sm" placeholder="Password">
                            </div>

                            <button id="btn-register" class="btn btn-info" @click="onSubmit":disabled="loading">Login
                            </button>
                            <p>
                                <router-link to="/register">Register</router-link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
/* eslint-disable */

import { mapActions } from 'vuex'

export default {
  name: 'login',
  data(){
    return {
      register: {},
      loading: false,
    }
  },
  // ,
  // computed: {
  //   fruits(){
  //     return store.state.fruits
  //   },
  //   fruitsSubscription(){
  //     return store.state.fruitsSubscription
  //   },
  //   subscriptionButtonText(){
  //     return this.subscribed ? 'Unsubscribe' : 'Subscribe'
  //   }
  // },
  created(){
    // console.log('test');
    // store.dispatch('checkAutenticated')
  },
  destroyed(){
    // if (this.subscribed) store.dispatch('unsubscribeFromFruits')
  },
  methods: {
      ...mapActions(['login']),
      onSubmit(){
        this.loading = true
        this.login(this.register)
      }
    }
  // methods: {
  //   onSubmit(){
  //     this.loading = true
  //     store.dispatch('login', this.register)
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
