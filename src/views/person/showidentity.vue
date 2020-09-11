<template>
  <div class="wrapper">
    <v-header />
    <div class="content">身份证正反面</div>
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
    this.$store.commit('common/updatePageTitle', this.$route.meta.title)
    // 还需要保存上级路由地址到store中去
    this.$store.commit('common/updateHeaderParentPath', '/home/personal')
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