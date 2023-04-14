import { createStore } from 'vuex'
import tab from './tab'

export default createStore({
  state: {
    sdfPath:'',
  },
  getters: {
  },
  mutations: {
    setSDFPath(state,arg){
      state.sdfPath = arg
    }
  },
  actions: {
  },
  modules: {
    tab
  }
})
