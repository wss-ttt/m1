<template>
  <div class="firstpage">
    <div class="info">
      <el-row class="mint-cell" v-for="(item, index) in list" :key="index">
        <el-col :span="12">
          <span>{{ item.title }}</span>
        </el-col>
        <el-col :span="12" style="text-align: right">
          <span>{{ item.value }}</span>
        </el-col>
      </el-row>
    </div>

    <div class="balance">
      <div v-for="(item, index) in list2" :key="index" class="b-item">
        <span class="v">{{ item.value }}</span>
        <span class="t">{{ item.title }}</span>
      </div>
    </div>

    <ul class="menu">
      <li v-for="(item, index) in menus" :key="index" class="m-item">
        <router-link :to="item.path">
          <div class="pic">
            <img :src="item.url" alt/>
          </div>
          <p>
            {{ item.title }}
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      list: [
        {
          title: '上季度考核是否达标',
          value: '达标'
        },
        {
          title: '本季度考核周期',
          value: 20
        },
        {
          title: '本季度业绩考核',
          value: 30
        },
        {
          title: '合同到期日期',
          value: 40
        }
      ],
      list2: [
        {
          title: '货款余额(元)',
          value: 10
        },
        {
          title: '货款余额(元)',
          value: 20
        },
        {
          title: '保证金(元)',
          value: 30
        }
      ],
      menus: [
        {
          url: require('../../assets/images/dj.png'),
          title: '订单系统',
          path: '/firstpage/order_system'
        },
        {
          url: require('../../assets/images/myjxs.png'),
          title: '我的经销商',
          path: '/firstpage/dealer'
        },
        {
          url: require('../../assets/images/mykh.png'),
          title: '我的客户',
          path: '/client/client'
        },
        {
          url: require('../../assets/images/mydj.png'),
          title: '待办事项',
          path: '/thing/thing_list',
          showIcon: true
        },
        {
          url: require('../../assets/images/xlfx.png'),
          title: '经销商业绩',
          path: '/firstpage/dealer_per'
        },
        {
          url: require('../../assets/images/hk.png'),
          title: '我的货款',
          path: '/firstpage/loans'
        },
        {
          url: require('../../assets/images/tjfl.png'),
          title: '我的返利',
          path: '/rebate/rebate'
        },
        {
          url: require('../../assets/images/zdshdj.png'),
          title: '自动审核订单',
          path: '/order/order'
        },
        {
          url: require('../../assets/images/yx.png'),
          title: '营销',
          path: '/marketing/marketing_list'
        },
        {
          url: require('../../assets/images/jz.png'),
          title: '家族',
          path: '/family/family'
        },
        {
          url: require('../../assets/images/htgl.png'),
          title: '合同管理',
          path: '/contract/contract'
        },
        {
          url: require('../../assets/images/htzd.png'),
          title: '制度',
          path: '/contract/contract_list'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {},
  filters: {}
}
</script>
<style scoped lang="scss">
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.firstpage {
  font-size: 14px;
  .mint-cell {
    padding: 0 15px;
    border-bottom: 1px solid #eaecf1;
    span {
      line-height: 55px;
    }
    &:last-child {
      border-bottom: none;
    }
  }
  .balance {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    height: 95px;
    > div {
      width: 33%;
      background: #fff;
      // border: 1px solid red;;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > span {
        &.t {
          font-size: #8a909e;
        }
        &.v {
          font-size: 16px;
          color: #333;
        }
      }
    }
  }

  .menu {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .m-item {
      width: 30%;
      background: #fff;
      flex-shrink: 0;
      margin-bottom: 10px;
      height: 100px;
      padding-top: 20px;
      text-align: center;
      .pic {
        width: 38px;
        height: 38px;
        background: #47a8ef;
        border-radius: 50%;
        margin: auto;
        @include center();
        img {
          width: 19px;
          height: 20px;
          display: block;
        }
      }
      p {
        color: #333;
        font-size: 14px;
        margin-top: 15px;
      }
    }
  }
}
</style>