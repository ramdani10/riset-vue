/* eslint-disable */
import Vue from 'vue'

const state = {}

const getters = {}

const mutations = {
  showToashNotif(state, payload) {
    const message = payload.message || 'Oops Something May Be Wrong!'

    if (payload.type === 'error') {
      Vue.toasted.error(message).goAway(payload.timeout || 3000)
    } else if (payload.type === 'success') {
      Vue.toasted.success(message).goAway(payload.timeout || 3000)
    } else {
      Vue.toasted.error(message).goAway(payload.timeout || 3000)
    }

  }
}

const actions = {
  showToash({ commit }, payload) {
    commit('showToashNotif', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
