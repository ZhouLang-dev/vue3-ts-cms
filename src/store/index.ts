import { createStore } from 'vuex'

const store = createStore({
  state: {
    name: '111'
  },
  getters: {
    name: function (state) {
      return state.name
    }
  }
})

export default store
