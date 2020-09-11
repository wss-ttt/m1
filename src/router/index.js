import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      // 添加重定向
      redirect: {
        name: "firstpage"
      }
    },
    {
      path: "/index",
      name: "index",
      component: resovle => require(["@/views/index.vue"], resovle)
    },
    {
      path: "/home",
      name: "home",
      component: resovle => require(["@/views/home/home.vue"], resovle),
      children: [
        {
          path: '/',
          redirect: {
            // 添加重定向
            name: 'firstpage'
          }
        },
        {
          path: "firstpage",
          name: "firstpage",
          meta: {
            title: '首页'
          },
          component: resovle => require(["@/views/home/firstpage.vue"], resovle)
        },
        {
          path: "order",
          name: "order",
          meta: {
            title: ''
          },
          component: resovle => require(["@/views/home/order.vue"], resovle)
        },
        {
          path: "shopcar",
          name: "shopcar",
          component: resovle => require(["@/views/home/shopcar.vue"], resovle)
        },
        {
          path: "personal",
          name: "personal",
          component: resovle => require(["@/views/home/personal.vue"], resovle)
        }
      ]
    },
    {
      path: "/firstpage/order_system",
      name: "order_system",
      meta: {
        title: '订单系统'
      },
      component: resovle =>
        require(["@/views/firstpage/order_system.vue"], resovle)
    },
    {
      path: "/firstpage/dealer",
      name: "dealer",
      meta: {
        title: '我的经销商'
      },
      component: resovle => require(["@/views/firstpage/dealer.vue"], resovle)
    },
    {
      path: '/client/client',
      name: 'client',
      meta: {
        title: '我的客户'
      },
      component: resovle => require(["@/views/client/client.vue"], resovle)
    },
    {
      path: '/client/add_client',
      name: 'add_client',
      meta: {
        title: '添加客户'
      },
      component: resovle => require(["@/views/client/add_client.vue"], resovle)
    },
    {
      path: '/client/client_list',
      name: 'client_list',
      meta: {
        title: '客户列表'
      },
      component: resovle => require(["@/views/client/client_list.vue"], resovle)
    }
  ]
});
