<template>
  <div class="wrapper">
    <v-header />
    订单系统
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$store.commit('common/updatePageTitle', '订单系统')
    // 还需要保存上级路由地址到store中去
    this.$store.commit('common/updateHeaderParentPath', '/home/firstpage')
  },
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {},
  filters: {}
}
</script>
<style scoped lang="scss">
.wrapper {
}
</style>