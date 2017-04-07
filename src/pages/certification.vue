<template>
  <div id="user-page" class="bottom-bar-padding">

    <div class="margin-t-10 block-wrap">

      <mt-field label="姓名" placeholder="请输入真实姓名" type="text"></mt-field>

      <mt-field label="身份证" placeholder="请输入你的身份证号" type="text"></mt-field>

    </div>

    <div class="enterprise-go margin-t-40" @click="$router.push('certification-company')">
      <i class="icon-certification-o"></i>进入企业认证
    </div>

    <mt-button id="bottom-fixed-bar" size="large" type="primary">
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