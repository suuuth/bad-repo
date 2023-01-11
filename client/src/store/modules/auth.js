import axios from 'axios'
import { isProxy, toRaw } from 'vue'
import router from '@/router'

const api = window.location.origin + '/api'
const state = {
  user: null,
  access_token: null
};

const getters = {
  isAuthenticated: state => { console.error('isAuthenticated state: ', isProxy(state) ? toRaw(state) : state); return !!state.user } ,
  StateUser: state => state.user,
};

const actions = {
  async Register({dispatch}, form) {
    await axios.post(`${api}/register`, form)
    let UserForm = new FormData()
    UserForm.append('username', form.username)
    UserForm.append('password', form.password)
    await dispatch('LogIn', UserForm)
  },

  async LogIn({ commit }, user) {
    user = isProxy(user) ? toRaw(user) : user
    axios.post(`${api}/login`, user).then(response => {
      console.log(response.data.user)
      commit('setUser', response.data.user)
      commit('setToken', response.data.access_token)
      router.push('/profile')
    }).catch(err => console.error(err))
  },

  async CreateMessage({ dispatch }, post) {
    await axios.post('post', post)
    await dispatch('GetMessages')
  },

  async GetMessages({ commit }){
    let response = await axios.get('messages')
    commit('setPosts', response.data)
  },

  async LogOut({ commit }){
    commit('logOut')
  }
};

const mutations = {
  setUser(state, username){
    state.user = username
  },
  setToken(state, access_token) {
    state.access_token = access_token
  },
  logOut(state) {
    state.user = null
    state.access_token = null
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
