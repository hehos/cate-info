<template>
  <div id="index-page" class="bottom-bar-padding">
    <!-- 头部搜索等... -->
    <div class="top-search">
      <div class="f-left select-address">
        <router-link to="/address">成都<i class="icon-caret-down"></i></router-link>
      </div>
      <div class="f-right to-user-btn">
        <router-link to="/user"><i class="icon-user-o"></i></router-link>
      </div>
      <div class="top-search-box" @click="$router.push('search')">
        <span class="f-right ico-box"><i class="icon-search"></i></span>
        <div class="input-box">
          <input type="text" placeholder="搜索你要感兴趣的">
        </div>
      </div>
    </div>
    <div class="white-bg block-wrap grid-view-box" style="height: 200px;">
      <mt-swipe :auto="0">

        <mt-swipe-item v-for="(iconBgs, i) in iconBgsPages" :key="i">
          <grid-box :cols="4">
            <grid-cell :key="idx"
              v-for="(item, idx) in gridCells.slice((i)*num, (i+1)*num)"
              :item="item"
              :itemIdx="idx+1"
              :iconBg="iconBgs[idx]"
              :to="{ name: 'list' }">
            </grid-cell>
          </grid-box>
        </mt-swipe-item>

      </mt-swipe>

    </div>


    <!-- 头条部分 -->
    <div class="margin-b-8 white-bg headline-box">
      <span class="f-left headline-title">九正头条</span>
      <span @click="$router.push('headline')" class="f-right headline-more">
        <i class="icon-angle-right3"></i>
      </span>
      <swiper class="headline-items" :options="headlineOption">

        <swiper-slide class="headline-item"
          v-for="i in Math.ceil(headlineItems.length/2)" :key="i">
          <router-link
            v-for="item in headlineItems.slice((i-1)*2, i*2)" :key="item.id"
            :to="{ name: 'detail', params: { id: item.id } }">
            {{ item.title }}
          </router-link>
        </swiper-slide>


      </swiper>
    </div>


    <!-- 热门服务 -->
    <div class="white-bg block-wrap hot-server">
      <div class="title-bar">
        <h2 class="title">热门服务</h2>
        <a class="more" href="">更多热门服务<i class=" icon-angle-right"></i></a>
      </div>
      <div class="block-cont">
        <div class="media-base" v-for="(item, idx) in hotItems" :key="idx">
          <a href="" class="thumbnail">
            <img :src="item.img" alt=""/>
          </a>
          <h4 class="media-title"><a href="">{{ item.title }}</a></h4>
        </div>
      </div>
    </div>

    <!-- 猜你喜欢 -->
    <div class="white-bg block-wrap guess-you-like">
      <div class="title-bar">
        <h2 class="title">猜你喜欢</h2>
      </div>
      <div class="block-cont">

        <div class="media-small-imgtxt general-imgtxt"
             v-for="(item, idx) in likeItems" :key="idx">
          <router-link to="detail" class="img">
            <img :src="item.img" alt=""/>
          </router-link>
          <div class="media-txt">
            <h5 class="media-title"><router-link to="detail">
              {{ item.title }}</router-link></h5>
            <p class="media-explain">
              <span class="f-right time">
                <i class="icon-clock2-o"></i>{{ item.date }}
              </span>
              {{ item.cateName }}  {{ item.address }}
            </p>
          </div>
        </div>

      </div>
    </div>

    <mt-button id="bottom-fixed-bar" size="large" type="primary"
      @click="$router.push('cate')">
      <i class="icon-edit2"></i>发布
    </mt-button>

  </div>

</template>
<script>

  import components from '../components';

  export default {
    name: 'index',
    data () {
      return {
        num: 8, // 一屏显示的grid-cell个数
        gridCells: [
          {id: 1, title: '二手信息', icon: 'icon-home'},
          {id: 2, title: '招标投标', icon: 'icon-home'},
          {id: 3, title: '设备租凭', icon: 'icon-home'},
          {id: 4, title: '在建工地', icon: 'icon-home'},
          {id: 5, title: '招聘信息', icon: 'icon-home'},
          {id: 6, title: '求职信息', icon: 'icon-home'},
          {id: 7, title: '安装维修', icon: 'icon-home'},
          {id: 8, title: '促销活动', icon: 'icon-home'},
          {id: 9, title: '促销活动2', icon: 'icon-home'},
          {id: 10, title: '促销活动3', icon: 'icon-home'},
          {id: 11, title: '促销活动4', icon: 'icon-home'},
          {id: 12, title: '促销活动4', icon: 'icon-home'}
        ],
        iconBgs: [
          '#ff7330', '#79bef5',
          '#f96364', '#b778fd',
          '#ffc42a', '#96d639',
          '#3dd7cd', '#6477ce',
          '#2ebbb2', '#83cc19'
        ],

        headlineItems: [
          { id: 1, title: '1九正招商宝：会员人数突破千万大关' },
          { id: 1, title: '2九正科技成为全球500强公司' },
          { id: 1, title: '3九正招商宝：会员人数突破千万大关' },
          { id: 1, title: '4九正科技成为全球500强公司' },
          { id: 1, title: '5九正招商宝：会员人数突破千万大关' },
          { id: 1, title: '6九正科技成为全球500强公司' }
        ],

        hotItems: [
          { title: '1这是标题这是标题', img: '/static/image/img1.jpg' },
          { title: '2这是标题这是标题', img: '/static/image/img1.jpg' },
          { title: '3这是标题这是标题', img: '/static/image/img1.jpg' }
        ],

        likeItems: [
          {
            title: '1这是标题这是标题11这是标题这是标题1',
            img: '/static/image/img1.jpg',
            cateName: '门窗',
            address: '成都',
            date: '2017-3-15'
          },
          {
            title: '2这是标题这是标题22这是标题这是标题2',
            img: '/static/image/img1.jpg',
            cateName: '门窗',
            address: '成都',
            date: '2017-3-15'
          },
          {
            title: '3这是标题这是标题22这是标题这是标题2',
            img: '/static/image/img1.jpg',
            cateName: '门窗',
            address: '成都',
            date: '2017-3-15'
          },
          {
            title: '4这是标题这是标题22这是标题这是标题2',
            img: '/static/image/img1.jpg',
            cateName: '门窗',
            address: '成都',
            date: '2017-3-15'
          }
        ],
        // 幻灯片
        headlineOption: {
          autoplay: 4000,
          direction: 'vertical',
          autoplayDisableOnInteraction: false,
          loop: true
        }
      }
    },
    computed: {
      iconBgsPages () {
        // 首先计算能显示多少屏
        var iconBgsPages = [];
        var pages = Math.floor(this.gridCells.length / 8);
        iconBgsPages.push(this.iconBgs.slice());
        while (true) {
          if (!pages) break;
          iconBgsPages.push(this.iconBgs.slice().sort(
            (a, b) => Math.random() > 0.5 ? -1 : 1
          ));
          pages--;
        }
        return iconBgsPages;
      }
    },
    methods: {
      publish () {

      }
    },
    components: {
      'grid-box': components.gridBox,
      'grid-cell': components.gridCell
    }
  }
</script>
<style lang="scss">

  @import "../scss/index.scss";

</style>
