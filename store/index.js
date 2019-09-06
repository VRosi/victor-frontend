import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'js-cookie'

Vue.use(Vuex)

// const expireTime = new Date(new Date().getTime() + 15 * 60 * 1000);

export const state = () => ({
  locales: ['en', 'fr'],
  locale: 'fr',
  authUser: null

})
export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  SET_USER(state, user) {
      if (user) Cookie.set('auth', user, { expires: 1 })
      state.authUser = user;
      console.log(user)
    }
}
