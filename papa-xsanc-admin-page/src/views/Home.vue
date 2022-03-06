<template>
  <div class="main-panel">
    <div class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="card card-plain">
              <div class="card-header">
                <h4 class="card-title"> Menus List</h4>
                <p class="card-category"></p>
              </div>
              <div class="card-body">
                <div>
                  <table class="table">
                    <thead class=" text-primary">
                      <th>
                        Name
                      </th>
                      <th>
                        Description
                      </th>
                      <th>
                        Image
                      </th>
                      <th>
                        Status
                      </th>
                      <th>
                        Category
                      </th>
                      <th class="text-right">
                        Price
                      </th>
                      <th class="text-right">
                        Action
                      </th>
                    </thead>
                    <tbody v-for="menu in menus" :key="menu.id">
                      <tr>
                        <td>
                          {{menu.name}}
                        </td>
                        <td>
                          {{menu.description}}
                        </td>
                        <td>
                          <img :src="menu.imageUrl" :alt="menu.name" width="200px">
                        </td>
                        <td>
                          <select class="form-control" v-model.lazy="data.newStatus" @change="patchStatus(menu.id)">
                            <option value="" selected disabled hidden>{{menu.status}}</option>
                            <option value="available">available</option>
                            <option value="sold">sold</option>
                          </select>
                        </td>
                        <td>
                          {{menu.Category.name}}
                        </td>
                        <td class="text-right">
                          {{menu.price}}
                        </td>
                        <td class="text-right">
                          <button class="btn btn-primary nc-icon nc-alert-circle-i" type="submit" @click="handleEdit(menu.id)"></button>
                          <button class="btn btn-danger nc-icon nc-basket" type="submit" @click.prevent="handleDelete(menu.id)"></button>

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
  </div>
</template>

<script>
// @ is an alias to /src
// import MenusList from '@/components/MenusList.vue'

export default {
  name: 'MenusList',
  data() {
    return {
      data: {
        id: '',
        newStatus: ''
      }
    }
  },
  methods: {
    handleDelete(id){
      this.$store.dispatch('deleteMenus', id)
    },
    handleEdit(id){
      this.$router.push(`/editmenu/${id}`)
      // setTimeout(()=>{
      //   this.$router.push(`/editmenu/${id}`)
      // }, 1500)
      
    },

    patchStatus(id){
      this.data.id = id
      this.$store.dispatch('patchStatusMenu', this.data)
    }
  },
  computed: {
    menus(){
      return this.$store.state.menus.data
    }
  },
  created(){
    this.$store.dispatch('getMenus')
  }
}
</script>
