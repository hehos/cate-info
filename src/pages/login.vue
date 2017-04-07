<template>
  <div id="login-page">
    <mt-navbar :fixed="true" v-model="selected">
      <mt-tab-item id="1">手机号登录</mt-tab-item>
      <mt-tab-item id="2">帐号登录</mt-tab-item>
    </mt-navbar>

    <div class="container">

      <mt-tab-container v-model="selected" :swipeable="true">
        <mt-tab-container-item id="1">

          <mt-field label="手机号" placeholder="请输入手机号" type="tel">
            <mt-button class="get-check" type="default">获取验证码</mt-button>
          </mt-field>

          <mt-field label="验证码" placeholder="请输入手机验证码" type="number"></mt-field>

        </mt-tab-container-item>

        <mt-tab-container-item id="2">

          <mt-field label="用户名" placeholder="请输入用户名"></mt-field>

          <mt-field label="密码" placeholder="请输入密码" type="password">
            <mt-switch class="show-pwd"></mt-switch>
          </mt-field>

        </mt-tab-container-item>
      </mt-tab-container>

      <div class="login-box">
        <mt-button class="active-btn" size="large" type="primary" @click="toNextPage">登录</mt-button>
        <div class="login-other-info">
          <router-link to="/register" class="f-right register-goto">立即注册</router-link>
          <router-link to="/password" class="get-pwd"> 忘记密码？</router-link>
        </div>

        <mt-button class="active-btn" plain size="large" type="primary"><i class="icon-qq"></i>使用QQ帐号登录</mt-button>
      </div>


    </div>

  </div>
</template>

<script>
  export default {
    name: 'login',

    data () {
      return {
        selected: '1'
      };
    },
    methods: {
      toNextPage () {
        // 判断符合登陆条件
        // ................
        // 符合 ==> 登陆
        this.$router.push({ path: 'index' });
      }
    }
  };
</script>

<style lang="scss">

  @import "../scss/login.scss";

</style>