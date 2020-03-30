import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Schedules from '@/views/Schedules.vue'
import Help from '@/views/Help.vue'

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
      path: '/schedules',
      name: 'Schedules',
      component: Schedules
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router
