<template>
  <div class="header">
    <mt-header :title="pageTitle">
      <router-link :to="headerParentPath" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      pageTitle: state => state.common.pageTitle,
      headerParentPath: state => state.common.headerParentPath
    })
  },
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
<style lang="scss">
.header {
  height: 50px;
  .mint-header {
    background: #354360;
    height: 100%;
  }
  .mint-header-title {
    font-size: 18px;
  }
}
</style>