import { createStore, createLogger } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './modules/auth'

const debug = process.env.NODE_ENV !== 'production'


export default createStore({

  modules: {
    auth
  },

  strict: true,
  plugins: [
    createLogger(),
    createPersistedState()
  ]
});