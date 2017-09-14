<template>
    <div class="container">
        <div class="row centered-form">
        <div class="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
            <div class="panel panel-default">
                <div class="panel-heading">
                        <h3 class="panel-title">Sign Up <small></small></h3>
                        </div>
                        <div class="panel-body">
                        <form role="form">
                            <div class="form-group">
                                <input type="text" name="email" id="email" class="form-control input-sm" placeholder="Email">
                            </div>

                            <div class="form-group">
                                <input type="password" name="password" id="password" class="form-control input-sm" placeholder="Password">
                            </div>

                            <input type="submit" value="Login" class="btn btn-info btn-block">
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
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
