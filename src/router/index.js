import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: resovle => require(['@/views/index.vue'], resovle)
    },
    {
      path: '/home',
      name: 'home',
      component: resovle => require(['@/views/home/home.vue'], resovle),
      children: [{
        path: 'firstpage',
        name: 'firstname',
        component: resovle => require(['@/views/home/firstpage.vue'], resovle),
      }, {
        path: 'order',
        name: 'order',
        component: resovle => require(['@/views/home/order.vue'], resovle),
      }, {
        path: 'shopcar',
        name: 'shopcar',
        component: resovle => require(['@/views/home/shopcar.vue'], resovle),
      }, {
        path: 'personal',
        name: 'personal',
        component: resovle => require(['@/views/home/personal.vue'], resovle),
      }]
    }
  ]
})
