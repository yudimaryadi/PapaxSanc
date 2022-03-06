<template>
  <div class="main-panel">
    <div class="content">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title"> Order List</h4>
          </div>
          <div class="card-body">
            <div>
              <table class="table">
                <thead class=" text-primary">
                  <th>
                    User Order
                  </th>
                  <th>
                    Table
                  </th>
                  <th>
                    Menu Orders
                  </th>
                  <th class="text-right">
                    Status Menu
                  </th>
                </thead>
                <tbody v-for="order in orders" :key="order.id">
                  <tr>
                    <td>
                      {{order.User.email}}
                    </td>
                    <td>
                      {{order.Table.name}}
                    </td>
                    <td>
                      {{order.Menu.name}}
                    </td>
                    <td class="text-right">
                      <select class="form-control" v-model.lazy="data.newStatus" @change="patchStatusOrder(order.id)">
                        <option value="" selected disabled hidden>{{order.statusOrder}}</option>
                        <option value="waiting">waiting</option>
                        <option value="complate">complate</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderList',
  data() {
    return {
      data: {
        id: '',
        newStatus: ''
      }
    }
  },
  methods: {
    patchStatusOrder(id){
      this.data.id = id
      this.$store.dispatch('patchStatusOrder', this.data)
    }
  },
  computed: {
    orders(){
      return this.$store.state.orders.data
    }
  },
  created() {
    this.$store.dispatch('getOrders')
  }
}
</script>

<style>

</style>