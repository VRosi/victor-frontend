import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _254648ce = () => interopDefault(import('../pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _2b7b8031 = () => interopDefault(import('../pages/_lang/experiment.vue' /* webpackChunkName: "pages/_lang/experiment" */))
const _5ec280f8 = () => interopDefault(import('../pages/_lang/indexing.vue' /* webpackChunkName: "pages/_lang/indexing" */))
const _3b297dcc = () => interopDefault(import('../pages/_lang/signup.vue' /* webpackChunkName: "pages/_lang/signup" */))
const _dfc15302 = () => interopDefault(import('../pages/_lang/success.vue' /* webpackChunkName: "pages/_lang/success" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/:lang",
      component: _254648ce,
      name: "lang"
    }, {
      path: "/:lang/experiment",
      component: _2b7b8031,
      name: "lang-experiment"
    }, {
      path: "/:lang/indexing",
      component: _5ec280f8,
      name: "lang-indexing"
    }, {
      path: "/:lang/signup",
      component: _3b297dcc,
      name: "lang-signup"
    }, {
      path: "/:lang/success",
      component: _dfc15302,
      name: "lang-success"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
