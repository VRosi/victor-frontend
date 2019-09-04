import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _254648ce = () => interopDefault(import('../pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _058e6e09 = () => interopDefault(import('../pages/_lang/about.vue' /* webpackChunkName: "pages/_lang/about" */))
const _5ec280f8 = () => interopDefault(import('../pages/_lang/indexing.vue' /* webpackChunkName: "pages/_lang/indexing" */))
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
      path: "/:lang/about",
      component: _058e6e09,
      name: "lang-about"
    }, {
      path: "/:lang/indexing",
      component: _5ec280f8,
      name: "lang-indexing"
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
