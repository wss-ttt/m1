<template>
  <div class="wrapper">
    <div class="header">艾如是</div>
    <div class="content">
      <router-view></router-view>
    </div>
    <v-tab></v-tab>
  </div>
</template>

<script>
import VTab from '@/components/tab.vue'
export default {
  components: {
    VTab
  },
  props: {},
  data() {
    return {}
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
@mixin center () {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  .header {
    height: 50px;
    font-size: 18px;
    color: #fff;
    background: #354360;
    @include center();
  }
}
</style>