<template>
  <div id="user-page">

    <div class="header-avatar-wrap">
       <span id="top-back-btn" @click="$router.go(-1)">
        <i class="icon-angle-left3"></i>
      </span>
      <router-link to="/message" class="message-btn">
        <span class="msg-point-ico"></span>
        <i class="icon-commenting"></i>
      </router-link>
      <div class="avatar-box" @click="$router.push('user-edit');">
        <img src="../image/avatar.jpg" alt="">
      </div>
      <div class="user-name">张三</div>
    </div>

    <div class="block-wrap my-functions">
      <grid-box :cols="4">
        <grid-cell v-for="(item, idx) in gridCells"
          :key="idx"
          :item="item"
          :itemIdx="idx+1"
          :iconColor="iconColor[idx]"
          :to="{ path: item.route }">
        </grid-cell>
      </grid-box>
    </div>

    <div class="block-wrap my-servers">
      <div class="title-bar">
        <h2 class="title">我的服务</h2>
      </div>
      <div class="block-cont">
        <grid-box :cols="4">
          <grid-cell v-for="(item, idx) in serverGridCells"
            :key="idx"
            :item="item"
            :itemIdx="idx+1"
            :to="{ name: item.route }">
          </grid-cell>
        </grid-box>
      </div>
    </div>

    <div class="more-server">
      <mt-cell title="查看更多" is-link to="http://192.168.0.188:8889"></mt-cell>
    </div> 

  </div>
</template>
<script>

  import components from '../components';

  export default {
    name: 'user',
    data () {
      return {
        gridCells: [
//          {title: '我的发布', icon: 'icon-home', route: 'myPublish'},
//          {title: '我的收藏', icon: 'icon-home', route: 'mycollect'},
//          {title: '历史纪录', icon: 'icon-home', route: 'myHistory'},
//          {title: '我的订阅', icon: 'icon-home', route: 'mySubscribe'}

          {title: '我的发布', icon: 'icon-home', route: 'my-publish'},
          {title: '我的收藏', icon: 'icon-home', route: 'my-collect'},
          {title: '历史纪录', icon: 'icon-home', route: 'my-history'},
          {title: '我的订阅', icon: 'icon-home', route: 'my-subscribe'}
        ],
        serverGridCells: [
          {title: '旺铺', icon: 'icon-shop-o', route: 'certification'},
          {title: 'VIP会员', icon: 'icon-shop-o', route: 'certification'},
          {title: '身份认证', icon: 'icon-shop-o', route: 'certification'},
          {title: '商学院', icon: 'icon-shop-o', route: 'certification'},
          {title: '微分销', icon: 'icon-shop-o', route: 'certification'},
          {title: 'VR', icon: 'icon-shop-o', route: 'certification'},
          {title: '微直播', icon: 'icon-shop-o', route: 'certification'},
          {title: '邀请码', icon: 'icon-shop-o', route: 'certification'}
        ],
        iconColor: [
          '#8dca45', '#f1cd00',
          '#61a4f9', '#ff553e'
        ]
      }
    },
    components: {
      'grid-box': components.gridBox,
      'grid-cell': components.gridCell
    }
  }
</script>
<style lang="scss">

  @import "../scss/user.scss";

</style>
