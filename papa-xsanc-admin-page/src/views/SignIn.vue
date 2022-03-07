<template>
  <div class="container">
    <div class="row justify-content-center align-items-center">
      <div class="col-md-8">
        <div class="card card-user">
          <div class="card-header ml-auto mr-auto">
            <h2 class="card-title">Login Admin</h2>
            <p>login to manage admin page</p>
          </div>
          <div class="card-body">
            <form @submit.prevent="handleLogin">
              <div class="row">
                <div class="col-md-6 ml-auto mr-auto">
                  <div class="form-group">
                    <h6 class="card-title">Email</h6>
                    <input type="email" class="form-control" placeholder="Email Address" v-model="user.email">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 ml-auto mr-auto">
                  <div class="form-group">
                    <h6 class="card-title">Password</h6>
                    <input type="password" class="form-control" placeholder="Your Password" v-model="user.password">
                  </div>
                </div>
              </div>
              <center>
              <p>if you don't have an account please <router-link to="/signup"><a>SignUp</a></router-link></p>
                
              
              <div class="row">
                <div class="update ml-auto mr-auto">
                  <button type="submit" class="btn btn-primary btn-round">Sign In</button>
                </div>
                <br>
                <p>or SignIn with : </p>
                <GoogleLogin 
                  :params="params" 
                  :renderParams="renderParams" 
                  :onSuccess="onSuccess"
                  :onFailure="onFailure"
                ></GoogleLogin>
              </div>
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import GoogleLogin from 'vue-google-login'

export default {
  name: 'SignIn',
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      renderParams: {
        width: 50,
        height: 50,
        longtitle: true
      },
      params: {
        client_id: "37191394102-gq74m3ias8tcttv4omgnus6uk6ra7tmq.apps.googleusercontent.com"
      },
    }
  },
  components: {
    GoogleLogin
  },
  methods: {
    handleLogin(){
      this.$store.dispatch('handleLogin', this.user)
      .then((result) => {
        localStorage.setItem('access_token', result.data.access_token)
        localStorage.setItem('email', this.user.email)
        this.$store.commit('SET_EMAIL', this.user.email)
        this.$router.push('/')

        window.location.reload()
      }).catch((err) => {
        console.log(err);
        if (err.message == 'Request failed with status code 401'){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid Email/Password!',
          })
        }
      });
    },

    onSuccess(googleUser){
      let id_token = googleUser.getAuthResponse().id_token
      this.$store.dispatch('googleLogin', id_token)
      this.$router.push({name : 'Home'})

      setTimeout(()=>{
        window.location.reload()
      },950)
    },
    onFailure(error){
      console.log(error);
    }
  }
}
</script>

<style>

</style>