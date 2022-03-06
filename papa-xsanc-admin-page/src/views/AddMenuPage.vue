<template>
  <div class="main-panel">
    <div class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-user">
            <div class="card-header ml-auto mr-auto">
              <h2 class="card-title">Create New Menu</h2>
              <p>You can create new menu if you Admin</p>
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
  name: 'AddMenuPage',
  components:{
    FormMenus
  }
}
</script>

<style>

</style>