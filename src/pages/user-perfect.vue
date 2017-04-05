<template>
  <div id="user-page" class="user-edit">

    <div class="padding-25 block-wrap">

      <mt-cell is-link title="头像">
        <span class="avatar-img">
          <i class="icon-user2-o"></i>
        </span>
      </mt-cell>

      <mt-field label="昵称" placeholder="请输入你的昵称" type="text"></mt-field>

      <mt-field class="username" label="用户名"  placeholder="设置后无法修改" type="text"></mt-field>

      <div class="margin-t-30 padding-10">
        <mt-button class="active-btn" @click="$router.push('index')" size="large">保存</mt-button>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'user-perfect',

    data () {
      return {

      }
    },
    created: function () {
      // 设置header信息
      this.$store.commit({
        type: 'setHeadInfo',
        headerTitle: '完善账户信息',
        headerRightText: '跳过',
        isFixed: false
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