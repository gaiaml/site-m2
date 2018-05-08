import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cart from '@/components/Cart'
import Command from '@/components/Command'
import Wish from '@/components/Wish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/carts',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/commands',
      name: 'Command',
      component: Command
    },
    {
      path: '/wish',
      name: 'Wish',
      component: Wish
    }
  ]
})
