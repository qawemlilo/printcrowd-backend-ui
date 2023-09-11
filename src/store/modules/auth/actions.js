import auth from '../../../api/auth'

export default {

  async getUser ({ commit }) {
    let user = await auth.getUser();

    commit('SET_USER', { user });
  },


  async login ({ commit }, payload) {
    let data = await auth.login(payload);

    commit('SET_USER', {
      user: data.user
    });

    commit('SET_TOKEN', {
      token: data.token
    });
  },


  async logout ({ commit }) {
    await auth.logout();

    commit('SET_USER', {
      user: null
    });

    commit('SET_TOKEN', {
      token: null
    });
  }
}
