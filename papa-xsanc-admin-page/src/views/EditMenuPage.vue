<template>
  <div class="main-panel">
    <div class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-user">
            <div class="card-header ml-auto mr-auto">
              <h2 class="card-title">Edit Menu Page</h2>
              <p>You can Edit menu if you Admin</p>
            </div>
            <div class="card-body">
              <FormMenus></FormMenus>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormMenus from "../components/FormMenus.vue";
export default {
  name: 'EditMenuPage',
  components:{
    FormMenus
  },
  created() {
    this.$store.dispatch('getMenuById', this.$route.params.id)
  }
}
</script>

<style>

</style>