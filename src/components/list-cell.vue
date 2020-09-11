<template>
    <div class="list-cell" :class="border" @click="click">
      <span class="title">{{ title }}</span>
      <span v-if="tip" class="tip">{{ tip }}</span>
      <span class="arrow el-icon-arrow-right"></span>
   </div>
</template>

<script>
  export default {
    components: {},
    props: {
      title: {
        type: String,
        default: '标题'
      },
      tip: {
        type: String,
      },
      border: {
        type: String,
        default: 'b'
      }
    },
    data() {
      return {
          
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
      click() {
        this.$emit('click')
      }
    },
    filters: {}
  }
</script>
<style scoped lang="scss">
.list-cell {
  font-size: 14px;
  display: flex;
  padding: 15px;
  background: #fff;
  position: relative;
  &.b {
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 1px;
      width: 100%;
      background: #c8c8cd;
      transform: scaleY(0.5);
    }
  }
  .title {
    flex: 1;
  }
  .tip {
    font-size: 12px;
  }
  .arrow {
    color: #c8c8cd;
    font-size: 14px;
    font-weight: bold;
  }
}
</style>