import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  locales: ['en', 'fr'],
  locale: 'en',
  authUser: null

})
export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  SET_USER(state, user) {
      state.authUser = user
    }
}
