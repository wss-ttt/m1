<template>
  <div class="order">
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0"
    >
      <li v-for="(item,index) in list" :key="index">aa{{ item }}</li>
      <p class="more">加载更多...</p>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      loading: false,
      list: [1, 2, 3, 4, 5, 6]
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
  methods: {
    loadMore() {
      this.loading = true
      console.log('loadMore')
      setTimeout(() => {
        let last = this.list[this.list.length - 1]
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i)
        }
        this.loading = false
      }, 2000)
    }
  },
  filters: {}
}
</script>
<style scoped lang="scss">
.order {
  // background: #fb3;
  overflow: auto;
  height: 100%;
  ul {
    li {
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-bottom: 10px;
      height: 100px;
    }
  }
  .more {
    text-align: center;
  }
}
</style>