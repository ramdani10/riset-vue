<template>
    <div class="container" align="center">
        <div class="row justify-content-center">
        <div class="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
            <div class="panel panel-default">
                <div class="panel-heading">
                        <h3 class="panel-title">Sign Up <small>{{ $store.state.auth.authUser }}</small></h3>
                        </div>
                        <div class="panel-body">
                        <form role="form">
                            <div class="row">
                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <div class="form-group">
                                        <input type="text" v-model="register.first_name" id="first_name" class="form-control input-sm" placeholder="First Name">
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <div class="form-group">
                                        <input type="text" v-model="register.last_name" id="last_name" class="form-control input-sm" placeholder="Last Name">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <div class="form-group">
                                        <input type="text" v-model="register.phone" id="phone" class="form-control input-sm" placeholder="Phone">
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <div class="form-group">
                                        <input type="email" v-model="register.email" id="email" class="form-control input-sm" placeholder="Email">
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <input type="text" v-model="register.address_1" id="address_1" class="form-control input-sm" placeholder="Address 1">
                            </div>

                            <div class="form-group">
                                <input type="text" v-model="register.address_2" id="address_2" class="form-control input-sm" placeholder="Address 2">
                            </div>

                            <div class="row">
                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <div class="form-group">
                                        <input type="text" v-model="register.verification_code" id="verification_code" class="form-control input-sm" value="12345" placeholder="verification_code">
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <div class="form-group">
                                        <button type="button" class="btn btn-info">Reload</button>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <div class="form-group">
                                        <input type="password" v-model="register.password" id="password" class="form-control input-sm" placeholder="Password">
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <div class="form-group">
                                        <input type="password" v-model="register.retype_password" id="retype_password" class="form-control input-sm" placeholder="Retype Password">
                                    </div>
                                </div>
                            </div>
                            
                            <button id="btn-register" class="btn btn-info" @click="onSubmit":disabled="loading">Register
                            </button>
                            <p>
                                <router-link to="/login">Log In</router-link>
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

// import store from '../../store/modules/auth.js';
import { mapActions } from 'vuex'

export default {
  name: 'app',
  data(){
    return {
      // subscribed: false,
      register: {},
      loading: false
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
    // this.fruits = store.dispatch('getFruits')
    // console.log(this.fruits)
  },
  destroyed(){
    // if (this.subscribed) store.dispatch('unsubscribeFromFruits')
  },
  methods: {
    ...mapActions(['signUp']),
    onSubmit(){
      this.loading = true
      // store.dispatch('signUp', this.register)
      this.signUp(this.register)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
