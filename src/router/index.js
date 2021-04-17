import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/start',
    name: 'Start',
    component: () => import('../views/Start.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('../views/Chat.vue')
  },
  {
    path: '/sante',
    name: 'Sante',
    component: () => import('../views/Sante.vue')
  },
  {
    path: '/corps-humain',
    name: 'Humain',
    component: () => import('../views/Humain.vue')
  },
  {
    path: '/mystere',
    name: 'Mystere',
    component: () => import('../views/Mystere.vue')
  },
  {
    path: '/culture-generale',
    name: 'Culture',
    component: () => import('../views/Culture.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
