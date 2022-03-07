<template>
  <form @submit.prevent="handleAddMenu">
  <div class="row">
    <div class="col-md-6 ml-auto mr-auto">
      <div class="form-group">
        <h6 class="card-title">Name</h6>
        <input type="name" class="form-control" placeholder="Name Menus" v-model="menu.name">
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 ml-auto mr-auto">
      <div class="form-group">
        <h6 class="card-title">Description</h6>
        <textarea class="form-control textarea" placeholder="Description Menus" v-model="menu.description"></textarea>
      </div>
    </div>
  </div>
  <div class="col-md-6 ml-auto mr-auto">
    <div class="form-group">
      <h6 class="card-title">Price</h6>
      <input type="number" class="form-control" placeholder="Price Menu" v-model="menu.price">
    </div>
  </div>
  <div class="col-md-6 ml-auto mr-auto">
    <div class="form-group">
      <h6 class="card-title">Image Url</h6>
      <input type="address" class="form-control" placeholder="Enter URL Menu" v-model="menu.imageUrl">
    </div>
  </div>
  <div class="col-md-6 ml-auto mr-auto">
    <div class="form-group">
      <h6 for="category" class="card-title">Category</h6>
        <select class="form-control" aria-label="Default select example" id="category" name="category" v-model="menu.categoryId">
          <option value="">--Select Category--</option>
          <option value="1">Food</option>
          <option value="2">Juice</option>
          <option value="3">Snacks</option>
          <option value="4">Coffe</option>
          <option value="5">Milk</option>
          <option value="6">Wine</option>
        </select>
    </div>
  </div>
    <div class="update col-md-6 ml-auto mr-auto">
      <router-link to="/">
        <button type="submit" class="btn btn-danger btn-round nc-icon nc-minimal-left"></button>
      </router-link>
      <button type="submit" class="btn btn-primary btn-round">Sign Up</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'FormMenus',
  data() {
    return {
      menu: {
        id: '',
        name: '',
        description: '',
        price: 0,
        imageUrl: '',
        categoryId: 0
      }
    }
  },
  methods: {
    handleAddMenu(){
      if (this.$store.state.menu.data) {
        this.$store.dispatch('updateMenus', this.menu)
        this.$router.push('/')
      }else{
        this.$store.dispatch('createMenu', this.menu)
        this.$router.push('/')
      }
    }
  },
  computed: {
    newMenu(){
      return this.$store.state.menu
    }
  },
  created(){
    if (this.$store.state.menu.data) {
      this.menu.id = this.$store.state.menu.data.id
      this.menu.name = this.$store.state.menu.data.name
      this.menu.description = this.$store.state.menu.data.description
      this.menu.price = this.$store.state.menu.data.price
      this.menu.imageUrl = this.$store.state.menu.data.imageUrl
      this.menu.categoryId = this.$store.state.menu.data.CategoryId
    }
    else if (!this.$route.name == 'AddMenus'){
      this.menu.id = ''
      this.menu.name = ''
      this.menu.description = ''
      this.menu.price = ''
      this.menu.imageUrl = ''
      this.menu.categoryId = ''
    }
  }
}
</script>

<style>

</style>