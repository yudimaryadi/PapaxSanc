<template>
  <div class="main-panel" v-if="nav">
    <nav class="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
      <div class="container-fluid">
        <div class="navbar-wrapper">
          <div class="navbar-toggle">
            <button type="button" class="navbar-toggler">
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <a class="navbar-brand" href="javascript:;">{{menus.user.role}} Page</a>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-bar navbar-kebab"></span>
          <span class="navbar-toggler-bar navbar-kebab"></span>
          <span class="navbar-toggler-bar navbar-kebab"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navigation">
          <form>
            <div class="input-group no-border">
              <div class="input-group-append">
                {{email}}
              </div>
            </div>
          </form>
          <ul class="navbar-nav">
            <li class="nav-item btn-rotate dropdown">
              <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="nc-icon nc-settings-gear-65"></i>
                <p>
                  <span class="d-lg-none d-md-block">Some Actions</span>
                </p>
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <router-link to="/">
                  <a class="dropdown-item" @click.prevent="handleLogout">
                    <div class="user-menu">
                    <GoogleLogin :params="params" :renderParams="renderParams" :logoutButton=true>Logout</GoogleLogin>
                    </div>
                  </a>
                </router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import GoogleLogin from 'vue-google-login';

export default {
  name: 'Nav',
  data() {
    return {
      nav: false,
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
  components: {
    GoogleLogin
  },
  methods: {
    handleLogout(){
      localStorage.removeItem('access_token')
      localStorage.removeItem('email')
      window.location.reload()
      this.$router.push('/signin')
    }
  },
  computed: {
    email(){
      return this.$store.state.email
    },
    menus(){
      return this.$store.state.menus
    }
  },
  created() {
    this.$store.dispatch('getMenus')
    this.$store.commit('SET_EMAIL_LOCAL')

    if (this.$store.state.email.length === 0) {
      this.nav = false
    } else{
      this.nav = true
    }
  }
}
</script>

<style>

</style>