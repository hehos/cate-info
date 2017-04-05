<template>
  <div id="detail-page">

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

    <div id="bottom-edit-btn" class="bottom-info-box">
      <div class="info-item call-info">
        <div><span>李波</span><span class="vip-tag-box"><i class="icon-star"></i>金牌会员</span></div>
        <div><span>18888888888</span><span>四川-成都</span></div>
      </div>
      <a href="tel:18188888888" class="info-item call-btn" @click="callEnd">
        <span><i class="icon-phone"></i></span>
        <div>电话</div>
      </a>
    </div>

  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';

  export default {
    name: 'detail',

    data () {
      return {
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
        headerTitle: '详细',
        headerRightIcon: 'icon-share2'
      })
    },

    methods: {
      callEnd () {
        setTimeout(function() {
          MessageBox({
            title: '是否联系成功？',
            message: '您的反馈是对我们莫大的支持！^_^',
            confirmButtonText: '已联系',
            showCancelButton: true,
            cancelButtonText: '虚假信息'
          });
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
        i { font-size: 22px; }
      }
      .vip-tag-box {
        color: $btnColor;
        font-size: 12px;
        i {
          padding: 1px;
          color: $activeColor;
          background-color: #ffcd56;
          border: 2px solid #ffdc1e;
          border-radius: 100%;
          width: 18px;
          height: 18px;
          display: inline-block;
          text-align: center;
          line-height: 12px;
        }
      }
    }
  }


</style>
