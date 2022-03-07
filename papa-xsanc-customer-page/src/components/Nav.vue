<template>
  <div class="pos-f-t">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mr-auto mb-2 mb-lg-0">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Branded Thinks</router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto mb-2 mb-lg-0" >
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item" v-if="!bookmark">
              <router-link class="nav-link" to="/SignIn">Sign In</router-link>
            </li>
            <li class="nav-item" v-if="bookmark">
              <router-link class="nav-link" to="/bookmark">Bookmark</router-link>
            </li>
          </ul>
          <!-- <form class="d-flex ">
            <input class="form-control me-2" type="search" placeholder="Search Products by Name" aria-label="Search">
            <button class="btn btn-outline-secondary" type="submit">Search</button>
          </form> -->
        </div>
      <div class="nav-link" v-if="bookmark">
        <router-link to="/home">
          <a @click="logout" data-bs-toggle="dropdown" aria-expanded="false" value="Reload Page">
            <div class="user-menu d-flex">
              <GoogleLogin :params="params" :renderParams="renderParams" :logoutButton=true>Logout</GoogleLogin>
            </div>
          </a>
        </router-link>
      </div>
    </div>
    </nav>
  </div>
</template>

<script>
import GoogleLogin from 'vue-google-login';

export default {
  name: "Navbar",
  data(){
    return {
      bookmark: false,
      params: {
        client_id: "37191394102-d2dafao3rujg9p0vdn0gblleuq6dueji.apps.googleusercontent.com"
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      }
    }
  },
  components:{
    GoogleLogin
  },
  methods: {
    logout(){
      localStorage.removeItem('token')
      this.$router.push({name : 'Home'})
      window.location.reload();
    }
  },
  created(){
    // if (!localStorage.getItem('token')) {
    //   this.bookmark = false
    // }
    // else{
    //   this.bookmark = true
    // }
  }
};
</script>

<style >
</style>
