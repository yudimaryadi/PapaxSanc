<template>
  <div class="home">
    <ProductCard></ProductCard>

  </div>
</template>

<script>
// // @ is an alias to /src
// import ProductList from '../components/ProductList.vue'
import ProductCard from '../components/ProductsCard.vue'

export default {
  name: 'Home',
  components: {
    ProductCard
  },
  created(){
    this.$store.dispatch("fetchProduct");
  }
}
</script>