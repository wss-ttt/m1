<template>
  <div class="test">
    <counter :value="val1" :on-minus="minusVal" :on-plus="plusVal"></counter>
    数据:{{val1}}
    <hr />
    <counter2 v-model="val2" />
    数据:{{val2}}
    <hr />
    <counter3 :value="val3" @on-change="handler"></counter3>
    数据 :{{val3}}
    <hr>
    <h2>Aa.vue组件的使用</h2>
    <Aa :arr="list"></Aa>
    <hr>
    <div class="msg">测试数据:{{msg}}</div> 
  </div>
</template>

<script>
import counter from '@/components/000-Test/Counter.vue'
import counter2 from '@/components/000-Test/Counter2.vue'
import counter3 from '@/components/000-Test/Counter3.vue'
import Aa from '@/components/000-Test/Aa.vue'
export default {
  components: {
    counter,
    counter2,
    counter3,
    Aa
  },
  props: {},
  data() {
    return {
      val1: 0,
      val2: 10,
      val3:20,
      msg:'好好学习',
      list:[
          {
              name:'乔峰',
              age:15
          },
          {
              name:'杨过',
              age:29
          },
          {
              name:'小龙女',
              age:30
          }
      ]
    }
  },
  beforeCreate(){
    //   console.log(document.querySelector('.msg'))// null
    //   console.log(this.msg)  // undefined
  },
  created() {
    //   console.log(document.querySelector('.msg'))// null
    //   console.log(this.msg)  // 好好学习
      this.msg = '天天向上'
  },
  beforeMount(){
    //   console.log(document.querySelector('.msg'))// null
    //   console.log(this.msg)  // 天天向上
  },
  mounted() {
    //   console.log(document.querySelector('.msg'))// dom
    //   console.log(this.msg)  // 天天向上
  },
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {
    minusVal() {
      this.val1--
    },
    plusVal() {
      this.val1++
    },
    handler(val){
        this.val3 = val
    }
  },
  filter() {},
  computed: {},
  watch: {}
}
</script>
<style scoped>
</style>