<template>
  <div id="login-page">

    <mt-field label="手机号" placeholder="请输入手机号" type="tel">
      <mt-button class="get-check" type="default">获取验证码</mt-button>
    </mt-field>

    <mt-field label="验证码" placeholder="请输入手机验证码" type="number"></mt-field>

    <mt-field label="新密码" placeholder="请输入新密码" :type="pwdType">
      <mt-switch v-model="showPwd" class="show-pwd"></mt-switch>
    </mt-field>

    <div class="login-box">
      <mt-button size="large" type="danger">重置密码</mt-button>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'getPwd',
    data () {
      return {
        selected: 1,
        showPwd: false
      }
    },
    created: function () {
      // 设置header信息
      this.$store.commit({
        type: 'setHeadInfo',
        headerTitle: '重置密码',
        isFixed: true
      });
    },
    computed: {
      pwdType () {
        return this.showPwd ? 'text' : 'password';
      }
    }
  }
</script>

<style lang="scss">
  @import "../scss/login.scss";

</style>
