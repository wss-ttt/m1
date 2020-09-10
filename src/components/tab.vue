<template>
  <div class="footer">
    <div
      v-for="(menu, index) in deepMenu"
      :key="index"
      class="f-item"
      :class="$route.path === menu.routerUrl ? 'active' : '' "
      @click="gotoAnotherPage(menu.routerUrl)"
    >
      <img :src="menu.picUrl" alt v-if="$route.path !== menu.routerUrl" />
      <img :src="menu.activePicUrl" alt v-if="$route.path === menu.routerUrl" />
      <p>{{menu.name}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      deepMenu: [
        {
          name: '首页',
          routerUrl: '/home/firstpage',
          picUrl: require('../assets/images/home.png'),
          activePicUrl: require('../assets/images/homeactive.png')
        },
        {
          name: '订单',
          routerUrl: '/home/order',
          picUrl: require('../assets/images/dingdan.png'),
          activePicUrl: require('../assets/images/dingdanactive.png')
        },
        {
          name: '购物车',
          routerUrl: '/home/shopcar',
          picUrl: require('../assets/images/shopcar.png'),
          activePicUrl: require('../assets/images/shopcaractive.png')
        },
        {
          name: '我',
          routerUrl: '/home/personal',
          picUrl: require('../assets/images/me.png'),
          activePicUrl: require('../assets/images/meactive.png')
        }
      ]
    }
  },
  watch: {},
  mounted() {},
  methods: {
    gotoAnotherPage(url) {
      this.$router.push(url)
    }
  },
  watch: {}
}
</script>
<style lang="scss" scoped>
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 55px;
  background: #354360;
  border-top: 1px solid #ccc;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -webkit-flex-wrap: nowrap;
  -webkit-box-lines: single;
  -moz-flex-wrap: nowrap;
  flex-wrap: nowrap;
  font-size: 14px;

  .f-item {
    flex: 1;
    @include center();
    flex-direction: column;
    color: #fff;
    img {
      width: 30%;
    }
    p {
      color: #fff;
    }
    &.active {
      p {
        color: #13d2d9;
      }
    }
  }
}
</style>
