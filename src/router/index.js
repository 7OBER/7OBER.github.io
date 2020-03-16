import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Game',
    name: 'Game',
    component: () => import( '../views/Game'),
    children:[
      {
        path: 'Game1',
        name: 'Game1',
        component: () => import( '../components/Game1.vue')
      },
      {
        path: 'Game2',
        name: 'Game2',
        component: () => import( '../components/Game2.vue')
      }
    ],redirect:'/Game/Game1'
  }
  
]

const router = new VueRouter({
  routes
})

export default router
