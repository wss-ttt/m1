<template>
  <div class="wrapper">
    <mt-cell
      title="所在区域"
      :value="myData.province+myData.city+myData.district"
      style="border-top: 1px solid #f7fafe;"
      is-link
      to="/person/changeaddr"
    ></mt-cell>
    <mt-cell title="详细地址" :value="myData.addr" is-link to="/person/changeaddr"></mt-cell>
    <mt-cell title="证件号码" :value="myData.id_card" style="border-bottom: 5px solid #f7fafe;"></mt-cell>
    <mt-cell title="手机号码" :value="myData.tel" is-link to="/person/changephonenum"></mt-cell>
    <mt-cell title="修改密码" is-link to="/person/Forgetpassword"></mt-cell>
    <mt-cell title="身份证照片" is-link to="/person/Showidentity"></mt-cell>
    <div style="width: 100%;height: 5px;background: #f6f6f6;"></div>
    <mt-cell title="退出登录" is-link to="/login"></mt-cell>
    <div style="width: 100%;height: 5px;background: #f6f6f6;"></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      myData: {
        province: '湖北省',
        city: '武汉市',
        district: '新洲区',
        addr: '长丰路',
        id_card: '42011719910325871X',
        tel: '18207109255',
      }
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
  methods: {},
  filters: {}
}
</script>
<style scoped>
</style>