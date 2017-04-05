<template>
  <div id="user-page" class="bottom-edit-padding">

    <div class="margin-t-10 block-wrap">

      <mt-field label="企业名称" placeholder="请输入企业名称" type="text"></mt-field>

      <mt-field label="企业注册号" placeholder="请输入企业注册号" type="text"></mt-field>

      <mt-field label="法人姓名" placeholder="请输入法人姓名" type="text"></mt-field>

      <mt-field label="法人身份证号" placeholder="请输入法人身份证号" type="text"></mt-field>

    </div>

    <div class="enterprise-go margin-t-40" @click="$router.push('certification')">
      <i class="icon-certification-o"></i>进入个人认证
    </div>

    <mt-button id="bottom-edit-btn" size="large" type="primary">
      立即授权
    </mt-button>
  </div>
</template>

<script>
  export default {
    name: 'attestation',

    data () {
      return {

      }
    },
    components: {
    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";



</style>