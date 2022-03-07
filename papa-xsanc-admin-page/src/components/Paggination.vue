<template>
  <div class="main-panel">
    <div class="content">
      <form @submit.prevent="search">
      <select class="form-select form-select-lg col-md-3" aria-label="Category Search" v-model="filter.category" >
      <option value=""><label><p>Choose Category Products</p></label></option>
      <option value="Food">Food</option>
      <option value="Juice">Juice</option>
      <option value="Snacks">Snacks</option>
      <option value="Coffe">Coffe</option>
      <option value="Milk">Milk</option>
      <option value="Wine">Wine</option>
      </select>

      <input class="form-control col-md-3" type="search" placeholder="Search Products by Name" aria-label="Search" v-model="filter.name">
      <button class="btn btn-outline-secondary col-sm-1" type="submit">Search</button>

      <button class="btn btn-outline-danger col-sm-1" @click.prevent="clearSearch">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
      </button>
    </form>

      <div class="section-header">
        <h3>Menus</h3>
        
      </div>
      <div v-for="menu in menus" :key="menu.id">
        <div class="row">
          <div class="card" style="width: 18rem;" >
          <img class="card-img-top" :src="menu.imageUrl" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{menu.name}}</h5>
            <p class="card-text">{{menu.description}}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
      <ul class="pagination" v-if="totalPage > 1">
        <li class="page-item"><a class="page-link" href="#" v-for="page in totalPage" :key="page" @click.prevent="nextPage(page)">{{page}}</a></li>
      </ul> 
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name : 'Paggination',
  data() {
    return {
      filter: {
        page : 1,
        category: '',
        name: ''
      }
    }
  },
  methods: {
    search() {
      this.filter.page = 1
      this.$store.dispatch('getMenusPub', this.filter)
    },
    clearSearch() {
      this.filter.page = 1
      this.filter.name = ''
      this.filter.category = ''
      this.$store.dispatch('getMenusPub', this.filter)
    },
    nextPage(page){
      this.filter.page = page
      this.$store.dispatch('getMenusPub', this.filter)
    }
  },
  computed: {
    menus(){
      return this.$store.state.menusPub
    },
    totalPage(){
      return this.$store.state.totalPage
    }

  },
  created() {
    this.$store.dispatch('getMenusPub', this.filter)
  }
}
</script>

<style>

</style>