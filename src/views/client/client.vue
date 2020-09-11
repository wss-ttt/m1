<template>
  <div class="wrapper">
    <v-header />
    <div class="content">
      <!-- <mt-cell title="添加客户" is-link to="/client/add_client"></mt-cell> -->
      <!-- <mt-cell title="客户列表" is-link to="/client/client_list"></mt-cell> -->

      <list-cell title="添加客户" @click="toUrl('/client/add_client')"></list-cell>
      <list-cell title="客户列表" @click="toUrl('/client/client_list')"></list-cell>
    </div>
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
    this.$store.commit('common/updateHeaderParentPath', '/home/firstpage')
  },
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {
    toUrl(url) {
      this.$router.push({
        path: url
      })
    }
  },
  filters: {}
}
</script>
<style scoped>
</style>