<template>
  <div id="wrapper ">
      <Sidebar></Sidebar>
      <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Nav from "./components/Nav.vue";

export default {
  name: 'App',
  components: {
    Sidebar,
    Nav
  }
}
</script>

<style>
</style>
