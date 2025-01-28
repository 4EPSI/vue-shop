import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routerHistory = createWebHistory()


import Home from './pages/Home.vue'
import Shop from './pages/Shop.vue'
import NoteFoundPage from './pages/404.vue'

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: NoteFoundPage
    }
  ]
})

export default routers