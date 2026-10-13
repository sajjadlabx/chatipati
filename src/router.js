
import { createRouter, createWebHistory } from 'vue-router'

import ChatLayout from './layouts/ChatLayout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ChatLayout,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
