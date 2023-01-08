import axios from 'axios';

const state = {
  user: null
};

const getters = {
  isAuthenticated: state => !!state.user,
  StateUser: state => state.user,
};

const actions = {
  async Register({dispatch}, form) {
    await axios.post('register', form)
    let UserForm = new FormData()
    UserForm.append('username', form.username)
    UserForm.append('password', form.password)
    await dispatch('LogIn', UserForm)
  },

  async LogIn({ commit }, user) {
    await axios.post('login', user)
    return await commit('setUser', user.get('username'))
  },

  async CreateMessage({ dispatch }, post) {
    await axios.post('post', post)
    await dispatch('GetPosts')
  },

  async GetMessages({ commit }){
    let response = await axios.get('messages')
    commit('setPosts', response.data)
  },

  async LogOut({ commit }){
    let user = null
    commit('logout', user)
  }
};

const mutations = {
  setUser(state, username){
    state.user = username
  },
  logOut(state){
    state.user = null
    state.posts = null
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
