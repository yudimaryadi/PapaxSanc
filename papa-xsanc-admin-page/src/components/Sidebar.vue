<template>
  <div class="sidebar" data-color="white" data-active-color="danger" v-if="sidebar">
    <div class="logo">
      <a href="https://www.creative-tim.com" class="simple-text logo-mini">
        <div class="logo-image-small">
          <img src="../assets/logo.png">
        </div>
        <!-- <p>CT</p> -->
      </a>
      <a href="https://www.creative-tim.com" class="simple-text logo-normal">
        Papa xSanc Resto
        <!-- <div class="logo-image-big">
          <img src="../assets/img/logo-big.png">
        </div> -->
      </a>
    </div>
    <div class="sidebar-wrapper">
      <ul class="nav">
        <li>
          <router-link to="/">
            <a>
              <i class="nc-icon nc-bank"></i>
              <p>Dashboard</p>
            </a>
          </router-link>
        </li>
        <li>
          <a href="#">
            <i class="nc-icon nc-tile-56"></i>
            <p>Add Table</p>
          </a>
        </li>
        <li>
          <router-link to="/orders">
            <a>
              <i class="nc-icon nc-bell-55"></i>
              <p>Orders</p>
            </a>
          </router-link>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      sidebar: false
    }
  },
  created(){
    if (!localStorage.getItem('access_token')) {
      this.sidebar = false
    } else{
      this.sidebar = true
    }
  }
}
</script>

<style>

</style>