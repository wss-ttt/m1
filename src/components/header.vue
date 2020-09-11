<template>
  <div class="header">
    <mt-header :title="pageTitle">
      <router-link to="/" slot="left">
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
      pageTitle: state => state.common.pageTitle
    })
  },
  watch: {},
  created() {},
  mounted() {
  },
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
  .mint-header-title {
    font-size: 18px;
  }
}
</style>