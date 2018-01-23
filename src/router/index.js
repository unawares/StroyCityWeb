import Vue from 'vue'
import Router from 'vue-router'
import HeadpageView from '@/pages/HeadpageView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Headpage',
      path: '/headpage',
      component: HeadpageView
    },
    {
      path: '*',
      redirect: '/headpage'
    }
  ]
})
