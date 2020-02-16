import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _67d92238 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _41f50bdc = () => interopDefault(import('../pages/anythings/index.vue' /* webpackChunkName: "pages/anythings/index" */))
const _f9b5c970 = () => interopDefault(import('../pages/articles/index.vue' /* webpackChunkName: "pages/articles/index" */))
const _581a7b60 = () => interopDefault(import('../pages/charts/index.vue' /* webpackChunkName: "pages/charts/index" */))
const _5fef5233 = () => interopDefault(import('../pages/articles/_id/index.vue' /* webpackChunkName: "pages/articles/_id/index" */))
const _9d06bb8c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _67d92238,
    name: "about"
  }, {
    path: "/anythings",
    component: _41f50bdc,
    name: "anythings"
  }, {
    path: "/articles",
    component: _f9b5c970,
    name: "articles"
  }, {
    path: "/charts",
    component: _581a7b60,
    name: "charts"
  }, {
    path: "/articles/:id",
    component: _5fef5233,
    name: "articles-id"
  }, {
    path: "/",
    component: _9d06bb8c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
