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
          <a class="navbar-brand" href="javascript:;">Admin Page</a>
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
                <a class="dropdown-item" @click.prevent="handleLogout">Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      nav: false
    }
  },
  methods: {
    handleLogout(){
      localStorage.removeItem('access_token')
      localStorage.removeItem('email')
      window.location.reload()
    }
  },
  computed: {
    email(){
      return this.$store.state.email
    }
  },
  created() {
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