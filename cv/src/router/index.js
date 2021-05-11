import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import About from '@/components/about'
import Works from '@/components/works'

Vue.use(Router)

export default new Router({
  linkActiveClass: "active",
  routes: [
    {
      path:'*',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    },
  ]
})
