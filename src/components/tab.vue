<template>
  <div class="footer">
    <div class="bar_parent" v-for="(menu,index) in deepMenu" :key="index">
      <div class="footer_bar" @click="gotoAnotherPage(menu.routerUrl)">
        <img
          :src="menu.picUrl"
          alt
          style="width: 30%;margin-top: 4px;"
          v-if="$route.path !== menu.routerUrl"
        />
        <img
          :src="menu.activePicUrl"
          style="width: 30%;margin-top: 4px;"
          alt
          v-if="$route.path === menu.routerUrl"
        />
        <p :class="$route.path === menu.routerUrl?'active_color':''">{{menu.name}}</p>
      </div>
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
  .footer_bar {
    width: 100%;
    height: 100%;
    text-align: center;
    p {
      color: #ffffff;
      width: 100%;
    }
    img {
      width: 31px;
      height: 27px;
    }
    .active_color {
      color: #13d2d9;
    }
  }

  .bar_parent {
    width: 25%;
    height: 50px;
  }

  .middle_bar {
    text-align: center;
    line-height: 50px;

    img {
      line-height: 50px;
      vertical-align: middle;
      width: auto;
      margin: 0;

      height: 68%;
    }
  }
}
</style>
