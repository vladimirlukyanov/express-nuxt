import axios from '~/plugins/axios'

const getUsers = () => axios.get('/api/users/admin')

export const state = () => ({
  currentUsers: null,
  newUser: null,
  drawer: true,
  createUser: false
})

export const mutations = {
  addUsers (state, data) {
    state.currentUsers = data
  },
  newUser (state, data) {
    state.newUser = data
  },
  clearNewUser (state) {
    state.newUser = null
  },
  toggleDrawer (state) {
    state.drawer = !state.drawer
  },
  toggleUserDialog (state) {
    state.createUser = !state.createUser
  }
}

export const actions = {
  async getUsers ({ commit }) {
    try {
      const { data } = await getUsers()
      await commit('addUsers', { data })
    } catch (err) {
      console.log(err)
    }
  },

  async newUser ({ commit }, userData) {
    try {
      const { data } = await axios.post('/api/users', userData)
      await commit('newUser', { data })
    } catch (err) {
      console.log(err)
    }
  }
}
