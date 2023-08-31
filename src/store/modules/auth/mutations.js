export default {
  SET_USER (state, payload) {
    state.user = payload.user;
  },

  SET_TOKEN (state, payload) {
    state.token = payload.token;
  }
}