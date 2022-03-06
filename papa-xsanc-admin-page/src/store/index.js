import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
import {Loader} from 'google-maps';

Vue.use(Vuex)
let BASE_URL = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    menus: [],
    email: '',
    orders: [],
    menu: [],
    maps: []
  },
  mutations: {
    SET_MENUS(state, payload){
      state.menus = payload
    },
    
    SET_EMAIL(state, payload){
      state.email = payload
    },

    SET_EMAIL_LOCAL(state){
      state.email = localStorage.getItem('email') || ''
    },

    SET_ORDER(state, payload){
      state.orders = payload
    },

    SET_MENU(state, payload){
      state.menu = payload
    },

    SET_MAPS(state, payload){
      state.maps = payload
    }
  },
  actions: {
    getMenus(context){
      axios({
        url: `${BASE_URL}/menus`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then((result) => {
        context.commit('SET_MENUS', result.data)
      }).catch((err) => {
        console.log(err);
      });
    },

    handleLogin(context, data){
      return axios({
        url: `${BASE_URL}/login`,
        method: 'POST',
        data: data
      })
    },

    googleLogin(context, id_token){
      fetch(`${BASE_URL}/pub/loginGoogle`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id_token})
      })
      .then((result) => {
          return result.json()
      })
      .then((res) => {
        console.log(res);
        if(!res.access_token){
          throw {message: 'Invalid Email/Password'}
        }
        console.log(res);
        localStorage.setItem('access_token', res.access_token)
        localStorage.setItem('email', res.user)
      }).catch((err) => {
          console.log(err);
      })
    },

    createUser(context, data){
      axios({
        url: `${BASE_URL}/register`,
        method: 'POST',
        data: data
      })
      .then(() => {
        Swal.fire('Saved!', '', 'success')
        this.$router.push('/signup')
      }).catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.message}`
        })
      });
    },

    getOrders(context){
      axios({
        url: `${BASE_URL}/orders`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then((result) => {
        context.commit('SET_ORDER', result)
      }).catch((err) => {
        console.log(err);
      });
    },

    createMenu(context, data){
      axios({
        url:  `${BASE_URL}/menus`,
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data
      })
      .then((result) => {
        Swal.fire('Saved!', `${result.data.name} Success to Saved`, 'success')
      }).catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.message}`
        })
      });
    },

    deleteMenus(context, id){
      axios({
        url: `${BASE_URL}/menus/${id}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
      })
      .then((result) => {
        Swal.fire('Deleted!', `${result.data.message}`, 'success')
        window.location.reload()
        }).catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.message}`
        })
      });
    },

    getMenuById(context, id){
      axios({
        url: `${BASE_URL}/menus/${id}`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
      })
      .then((result) => {
        context.commit('SET_MENU', result)
      }).catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.message}`
        })
      });
    },

    updateMenus(context, data){
      axios({
        url: `${BASE_URL}/menus/${data.id}`,
        method: 'PUT',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data
      })
      .then((result) => {
        Swal.fire('updated!', `${result.data[0].name}`, 'success')  
        // this.$router.push('/')
        }).catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.message}`
        })
      });
    },

    orderMenus(context, id){
      axios({
        url: `${BASE_URL}/order/${id}`,
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          table: 2
        }
      })
      .then(() => {
        Swal.fire('Created!', `Order Created`, 'success')
        window.location.reload()
        }).catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.message}`
        })
      });
    },

    patchStatusOrder(context, data){
      axios({
        url: `${BASE_URL}/orders/${data.id}`,
        method: 'PATCH',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          statusOrder: data.newStatus
        }
      })
      .then(() => {
        Swal.fire('updated!', `Status Updated`, 'success')  
        // this.$router.push('/')
        }).catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.message}`
        })
      });
    },

    patchStatusMenu(context, data){
      axios({
        url: `${BASE_URL}/menus/${data.id}`,
        method: 'PATCH',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          status: data.newStatus
        }
      })
      .then(() => {
        Swal.fire('updated!', `Status Updated`, 'success')  
        // this.$router.push('/')
        }).catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.message}`
        })
      });
    },

    getMaps(context){
      const loader = new Loader('37191394102-gq74m3ias8tcttv4omgnus6uk6ra7tmq.apps.googleusercontent.com');
      loader.load().then(function (google) {
        const map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8,
        });
        console.log(map);

        context.commit('SET_MAPS', map)
      });
    }
  },
  modules: {
  }
})
