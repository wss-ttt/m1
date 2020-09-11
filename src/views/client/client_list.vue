<template>
  <div class="wrapper">
    <v-header />客户列表
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$store.commit('common/updatePageTitle', '我的客户')
    // 还需要保存上级路由地址到store中去
    this.$store.commit('common/updateHeaderParentPath', '/client/client')
  },
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {},
  filters: {}
}
</script>
<style scoped>
</style>