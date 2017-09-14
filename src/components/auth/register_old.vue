<template>
    <div class="container">
        <div class="row centered-form">
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

import { mapActions } from 'vuex'
// import { required, minLength, email, sameAs, and } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      register: {},
      msg: process.env.NODE_ENV,
      loading: false
    }
  },
  methods: {
    ...mapActions(['registerNewUser']),
    onSubmit: function () {
      /* send request to modules auth js event registerNewUser */
      this.registerNewUser(this.register).then(response => {
        console.log(response)
      })
      // if (!this.$v.user.$error && this.$v.retypePassword) {
      //   this.registerNewUser(this.user)
      //   .then(response => {
      //     console.log(response)

      //     this.$toasted.global.success({ message: response.message }).goAway(2500)

      //     setTimeout(() => {
      //       this.$router.push('/login')
      //     }, 4000)
      //   })
      //   .catch(reason => console.log(reason.response))
      //   return
      // }
      // this.$toasted.global.error({ message: 'Please fill the form correctly' }).goAway(3000)
    }
  }
}
/*

computed: {
  inValidate: function () {
    let status = !this.$v.user.$error && this.passwordMatch
    console.log(status)
      return !status
    },
    passwordMatch: function () {
      return this.user.password === this.retypePassword
    }
}
}
+/

// import gql from 'graphql-tag';
/*
const pokemonQuery = gql`
  query pokemonQuery($id: ID!) {
    pokemon: Pokemon(id: $id) {
      id
      name
      url
    }
  }
`;

export default {
  name: 'register',
  data: () => ({
    pokemon: {
      name: '',
      url: '',
      1
    },
    trainerName,
    loading: 0
  }),
  apollo: {
    pokemon: {
      query: pokemonQuery,
      variables () {
        return { id: this.pokemonId };
      },
      skip () {
        return this.isNew;
      },
      loadingKey: 'loading'
    }
  },
  computed: {
    isNew () {
      return !this.pokemonId;
    },
    isValid () {
      return !!this.pokemon.name && !!this.pokemon.url;
    }
  },
  methods: {
    submit () {
      return this.$apollo.mutate({
        mutation: this.isNew ? createPokemonMutation : updatePokemonMutation,
        variables: this.pokemon
      })
      .then((data) => {
        this.$router.go(-1);
      })
      .catch((error) => {
        console.error(error);
      });
    },
    remove () {
      return this.$apollo.mutate({
        mutation: deletePokemonMutation,
        variables: this.pokemon
      })
      .then((data) => {
        this.$router.go(-1);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }
*/

/*
export default {
  name: 'register',
  data () {
    return {
      register: {},
      msg: process.env.NODE_ENV,
      loading: false
    }
  },
  methods: {
    addUser () {
      console.log(this.register)
      this.loading = !this.loading
      setTimeout(() => {
        this.loading = !this.loading
      }, 1000)
    }
  }
}
*/
/*
export default {
  data () {
    return {
      // register: {},
      msg: process.env.NODE_ENV,
      loading: false
    }
  },
  computed: {
    ...mapActions({
      register: 'allUsers'
    })
  },
  methods: {
    getUsers (users) {
      this.$store.dispatch('getUsers', users)
    }
  }
}
*/

// export default {
//   data () {
//     return {
//       register: {},
//       msg: process.env.NODE_ENV,
//       loading: false
//     }
//   },
//   computed: mapGetters({
//     register: 'allUsers'
//   })
//   ,
//   methods: mapActions([
//     'getUsers'
//   ]),
//   created () {
//     console.log('test')
//     this.$store.dispatch('getAllUsers')
//   }
// }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>