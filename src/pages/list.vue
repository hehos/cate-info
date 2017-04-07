<template>
  <div id="list-page" class="bottom-bar-padding ">

    <div id="header-search-wrap">
      <span id="top-back-btn" @click="$router.go(-1)">
        <i class="icon-angle-left3"></i>
      </span>

      <div class="top-search-box" @click="$router.push('search')">
        <span class="f-right ico-box"><i class="icon-search"></i></span>
        <div class="input-box">
          <input type="text" placeholder="搜索你要感兴趣的">
        </div>
      </div>
    </div>

    <div class="margin-b-8 block-wrap filter-wrap">
      <tab-box v-model="cellSelected">
        <tab-cell v-model="childsCellSelected[idx]"
            v-for="(item, idx) in filterDatas"
            :key="idx"
            :item="item"
            :hasChild="item.childs">
          <tab-popup-cell
              v-for="cItem in item.childs"
              :key="cItem.id"
              :item="cItem"
              :rightIcon="true">
          </tab-popup-cell>
        </tab-cell>
      </tab-box>
    </div>

    <div class="">

      <div class="white-bg media-small-imgtxt general-imgtxt2"
           v-for="(item, idx) in items" :key="idx">
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

    <mt-button id="bottom-fixed-bar" size="large" type="primary"
               @click="$router.push('cate')">
      <i class="icon-edit2"></i>发布
    </mt-button>
  </div>
</template>

<script>

  import components from '../components';

  export default {
    name: 'list',

    data () {
      return {
        cellSelected: -1,
        childsCellSelected: [],
        filterDatas: [
          {
            id: 0,
            title: '地区',
            childs: [
              { id: 0, title: '全成都' },
              { id: 1, title: '金牛区' },
              { id: 2, title: '青羊区' }
            ]
          },
          {
            id: 1,
            title: '类型',
            childs: [
              { id: 0, title: '二手信息' },
              { id: 1, title: '招标信息' },
              { id: 2, title: '设备租凭' }
            ]
          },
          {
            id: 2,
            title: '来源',
            childs: [
              { id: 0, title: '经纪人' },
              { id: 1, title: '企业' },
              { id: 2, title: '个人' }
            ]
          },
          {
            id: 3,
            title: '排序',
            childs: [
              { id: 0, title: '最新的' },
              { id: 1, title: '离我最近' },
              { id: 2, title: '人气最高' }
            ]
          }
        ],

        items: [
          {
            title: '1这是标题这是标题11这是标题这是标题1',
            img: '/static/image/img1.jpg',
            cateName: '门窗',
            address: '成都',
            distance: '300m',
            date: '2017-3-15'
          },
          {
            title: '2这是标题这是标题22这是标题这是标题2',
            img: '/static/image/img1.jpg',
            cateName: '门窗',
            address: '成都',
            distance: '300m',
            date: '2017-3-15'
          },
          {
            title: '3这是标题这是标题22这是标题这是标题2',
            img: '/static/image/img1.jpg',
            cateName: '门窗',
            address: '成都',
            distance: '300m',
            date: '2017-3-15'
          },
          {
            title: '4这是标题这是标题22这是标题这是标题2',
            img: '/static/image/img1.jpg',
            cateName: '门窗',
            address: '成都',
            distance: '300m',
            date: '2017-3-15'
          },
          {
            title: '4这是标题这是标题22这是标题这是标题2',
            img: '/static/image/img1.jpg',
            cateName: '门窗',
            address: '成都',
            distance: '300m',
            date: '2017-3-15'
          }
        ]
      }
    },

    created: function () {

    },

    methods: {

    },

    components: {
      'tab-box': components.tabBox,
      'tab-cell': components.tabCell,
      'tab-popup-cell': components.tabPopupCell
    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";

  #list-page {
    padding-top: 51px + 52px;
    .top-search-box {
      margin: 10px 15px;
    }
    .filter-wrap {
      position: fixed;
      top: 50px;
      left: 0;
      right: 0;
      z-index: 5;
    }
  }


</style>