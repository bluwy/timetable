import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Settings from '@/views/Settings.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})

export default router
