import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import WeddingInvitation from './components/WeddingInvitation.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/wedding-invitation',
    name: 'wedding-invitation',
    component: WeddingInvitation,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
