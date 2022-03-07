<template>
  <div class="main-panel">
    <div class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="card ">
            <div class="card-header ">
              Google Maps
            </div>
            <div class="card-body ">
              <div :id="map" :class="map"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Maps',
  computed: {
    map(){
      return this.$store.state.maps
    }
  },
  created() {
    this.$store.dispatch('getMaps')
  }
}
</script>

<style>

</style>