<template>
  <div id="detail-page">
    <mt-header title="详情" :fixed="true">
      <div slot="left" @click="$router.go(-1)">
        <i class="icon-angle-left3"></i>
      </div>
      <div slot="right">
        <span class="margin-r-8"><i class="icon-weixin-share"></i></span>
        <span><i class="icon-heart-o"></i></span>
      </div>
    </mt-header>

    <div class="slider-box">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, idx) in swiperDatas" :key="idx">
          <img :src="item.img" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <div class="block-wrap info-box">
      <span class="f-right user-type">商家</span>
      <h4 class="title">标题标题标题标题标题标题标题标题标题标
        标题标题标题标题标题标题标题标题题标题标题标题标题</h4>
      <div class="sub-info">
        <span class="f-right"><i class="icon-eye"></i>30次</span>
        <i class="icon-clock2-o"></i>2017-3-17
      </div>
      <div class="info-items">
        <div class="info-item">
          类型：地板
        </div>
        <div class="info-item">
          地址：解放路一段188号
        </div>
      </div>
    </div>

    <div class="block-wrap">
      <div class="title-bar"><h2 class="title">服务详情</h2></div>
      <div class="block-cont">
        详细内容
      </div>
    </div>

    <div class="block-wrap">
      <div class="avatar-wrap">
        <div class="avatar-box">
          <img class="avatar-img" src="../image/avatar.jpg" alt="">
        </div>
        <div class="avatar-cont">
          <div class="name-box">
            <span class="name">张三</span>
            <span class="orange-dark">已认证</span>
            <span class="ico-box"><i class="icon-diamond"></i></span>
          </div>
          <div class="gray-light2">2017年2月6日注册</div>
        </div>
      </div>
    </div>

    <div id="bottom-edit-btn" class="bottom-info-box">
      <div class="info-item call-info">
        <div><span>李波</span><span class="vip-tag-box"><i class="icon-star"></i>金牌会员</span></div>
        <div><span>188xxxx8888</span><span>四川-成都</span></div>
      </div>
      <a href="sms:18188888888?body=您好，我对您在九正分类信息平台发布的xxx信息很感兴趣，想和您详细了解一下。"
         class="info-item call-btn">
        <span><i class="icon-envelope-o"></i></span>
        <div>留言</div>
      </a>
      <a href="tel:18188888888" class="info-item call-btn" @click="callEnd">
        <span><i class="icon-phone"></i></span>
        <div>电话</div>
      </a>
    </div>


    <mt-popup class="call-state-wrap"
      v-model="popupVisible"
      :closeOnClickModal="false"
      popup-transition="popup-fade">
      <span class="close" @click="popupVisible = false">×</span>
      <h1 class="call-state-title">是否联系客服？</h1>
      <div class="call-state-items">
        <span class="call-state-item" @click="popupVisible = false">
          <i class="icon-smile-o"></i>
          <div class="call-state-item-txt">已联系</div>
        </span>
        <span class="call-state-item" @click="popupVisible = false">
          <i class="icon-frown-o"></i>
          <div class="call-state-item-txt">没打通</div>
        </span>
        <span class="call-state-item" @click="popupVisible = false">
          <i class="icon-times-circle-o"></i>
          <div class="call-state-item-txt">虚假信息</div>
        </span>
      </div>
    </mt-popup>
  </div>
</template>

<script>
  export default {
    name: 'detail',

    data () {
      return {
        popupVisible: false,
        swiperDatas: [
          { img: '/static/image/banner1.jpg' },
          { img: '/static/image/banner1.jpg' },
          { img: '/static/image/banner1.jpg' },
          { img: '/static/image/banner1.jpg' },
          { img: '/static/image/banner1.jpg' }
        ],
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction'
        }
      }
    },
    created: function () {
      // 使用设置header信息
      this.$store.commit({
        type: 'setHeadInfo',
        headerTitle: '详情',
        headerRightIcon: 'icon-share2'
      })
    },

    methods: {
      callEnd () {
        let _ = this;
        setTimeout(function() {
          _.popupVisible = true;
        }, 2000);
      }
    },

    components: {

    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";


  #detail-page {
    padding-bottom: 70px;
    .slider-box {
      img {
        width: 100%;
        max-height: 200px;
      }
      .swiper-pagination {
        text-align: right;
        padding-right: 20px;
      }
    }
    .info-box {
      padding: 15px 12px;
      line-height: 2.2;
      color: $gray2;
      .user-type {
        margin-left: 15px;
        margin-bottom: 5px;
        border: 1px solid $activeColor;
        color: $activeColor;
        font-size: 12px;
        line-height: 1.4;
        padding: 1px 3px;
        border-radius: 5px;
      }
      .title {
        line-height: 1.4;
        margin-bottom: 10px;
        font-size: 15px;
        font-weight: normal;
        font-family: microsoft yahei, simsun;
      }
      .sub-info {
        padding-bottom: 10px;
        margin-bottom: 10px;
        @include slenderBorder($grayBorder);
      }
    }

    .avatar-wrap {
      display: flex;
      align-items: stretch;
      justify-content: space-around;
      padding: 10px;
      .avatar-box {
        flex-grow: 0;
        margin-right: 20px;
      }
      .avatar-img {
        width: 70px;
        height: 70px;
      }
      .avatar-cont {
        flex-grow: 4;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
      .name-box {
        span { margin-right: 8px; }
        .ico-box {
          color: darken(skyblue, 5%);
        }
      }
    }

    .bottom-info-box {
      background-color: transparent;
      display: flex;
      align-items: stretch;
      line-height: 1.6;
      font-size: 16px;
      color: #FFFFFF;
      .info-item {
        flex-shrink: 1;
        flex-basis: auto;
        padding: 6px 15px;
      }
      .call-info {
        flex-grow: 4;
        background-color: #79bef5;
        span { margin-right: 15px; }
      }
      .call-btn {
        flex-grow: 1;
        text-align: center;
        background-color: $activeColor;
        & + .call-btn {
          border-left: 1px solid #FFFFFF;
        }
        i {
          font-size: 22px;
          margin-right: 0;
        }
      }
      .vip-tag-box {
        color: $btnColor;
        font-size: 12px;
        i {
          color: $activeColor;
          background-color: #ffcd56;
          border: 2px solid #ffdc1e;
          border-radius: 100%;
          width: 18px;
          height: 18px;
          display: inline-block;
          text-align: center;
          line-height: 1;
          font-size: 14px;
        }
      }
    }

    .call-state-wrap {
      padding: 5px 15px;

      .call-state-title {
        line-height: 2.4;
        border-bottom: 1px solid $grayBdLight;
        font-size: 14px;
      }
      .close {
        float: right;
        font-family: $smallFont;
        margin-top: .2em;
        font-size: 20px;
        color: $gray-light2;
        &:hover { color: inherit; }
      }

      i {
        margin-right: 0;
        font-size: 36px;
      }
      .call-state-items {
        padding: 15px 0 20px;
        display: flex;
        align-items: center;
        text-align: center;
      }
      .call-state-item {
        flex: 1 1 auto;
        padding: 0 15px;
        &:nth-child(1) i {
          color: $brand-success;
        }
        &:nth-child(2) i {
          color: $orange-dark;
        }
        &:nth-child(3) i {
          color: $gray-light2;
        }
      }
      .call-state-item-txt {
        white-space: nowrap;
        margin-top: 5px;
      }
    }
  }


</style>
