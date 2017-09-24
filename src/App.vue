<template>
  <b-container>
    <!-- top Menu -->
    <header class="row">
      <div class="col-md-4 col-xs-2">
        <h1>Clean & GO </h1>
      </div>
      <div class="col-md-8 col-xs-4" align-v="end">
        <b-nav>
          <b-nav-item active><router-link to="/">Home</router-link></b-nav-item>
          <b-nav-item><router-link to="/worker/index">Worker</router-link></b-nav-item>
          <b-nav-item-dropdown id="nav7_ddown" text="Login/Sign Up" right v-if="!currentUser">
            <b-dropdown-item><router-link to="/login">Log In</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/register">Sign Up</router-link></b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown id="nav7_ddown" :text="currentUser.first_name +' '+currentUser.last_name" right v-if="currentUser">
            <b-dropdown-item @click="authLogout()"> Log Out </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav>
      </div>
    </header>
    <hr size="30">
    <!-- end top menu -->

    <router-view></router-view>    

    <!-- <footer class="row" align="center">
      <div class="col-md-12 col-xs-12">
        <div class="row">
          <div class="col-md-12 col-xs-12">
            <b-nav>
              <b-nav-item active>Active</b-nav-item>
              <b-nav-item>Link</b-nav-item>
              <b-nav-item>Another Link</b-nav-item>
              <b-nav-item disabled>Disabled</b-nav-item>
              <b-nav-item-dropdown id="nav7_ddown" text="Dropdown" right>
                <b-dropdown-item>one</b-dropdown-item>
                <b-dropdown-item>two</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>three</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-nav>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-xs-12"><small>Copyright Clean & Go @2017</small></div>
        </div>
      </div>
    </footer> -->
  </b-container>

  <!-- <div id="app"> -->
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view></router-view> -->
  <!-- </div> -->
</template>

<script>
/* eslint-disable */

import { mapGetters,mapActions  } from 'vuex'

export default {
  name: 'app',
  created(){
    this.checkAutenticated()
  },
  methods: {
      ...mapActions(['checkAutenticated','authLogout'])
    },
  computed: {
    ...mapGetters({
      currentUser: 'getAuthenticated'
    })
  }
}
</script>

<style>

/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
