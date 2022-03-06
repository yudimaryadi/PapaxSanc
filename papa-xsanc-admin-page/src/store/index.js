import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
let BASE_URL = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    menus: [],
    email: ''
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
    }
  },
  modules: {
  }
})
