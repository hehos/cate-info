<template>
  <div id="user-page" class="user-edit">

    <div class="margin-t-10 block-wrap">

      <mt-cell is-link title="头像">
        <img class="avatar-img" :src="info.avatar" alt="">
      </mt-cell>

      <mt-cell is-link title="昵称" :value="info.nickname"></mt-cell>

      <mt-cell is-link title="用户名" :value="info.username"></mt-cell>

      <mt-cell is-link title="修改密码" :to="{ name: 'password' }"></mt-cell>

    </div>

    <div class="margin-t-8 block-wrap bind-list">

      <mt-cell title="QQ">
        <mt-button size="small" type="primary" plain>绑定</mt-button>
        <i slot="icon" class="icon-qq qq-ico"></i>
      </mt-cell>

      <mt-cell title="微信">
        <mt-button size="small" type="primary" plain>绑定</mt-button>
        <i slot="icon" class="icon-weixin wx-ico"></i>
      </mt-cell>

      <mt-cell :title="info.mobile">
        <mt-button size="small" type="primary" class="is-bind" plain>绑定</mt-button>
        <i slot="icon" class="icon-mobile-o sj-ico"></i>
      </mt-cell>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'user-edit',

    data () {
      return {
        info: {
          avatar: '/static/image/avatar.jpg',
          nickname: '张三',
          username: '张三2',
          mobile: '18888888888'
        }
      }
    },
    created: function () {
      // 设置header信息
      this.$store.commit({
        type: 'setHeadInfo',
        headerTitle: '个人信息'
      });
    },
    components: {
    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";



</style>