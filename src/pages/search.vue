<template>
  <div id="search-page">

    <div id="header-search-wrap">
      <span id="top-back-btn" @click="$router.go(-1)">
        <i class="icon-angle-left3"></i>
      </span>
      <mt-search v-model="searchKey">
        <mt-cell
          v-for="(item, index) in searchResult"
          :title="item.title"
          :key="index">
        </mt-cell>
      </mt-search>
    </div>

    <div class="cont-wrap">
      <div class="margin-15">热门搜索</div>
      <label-box class="margin-15">
        <label-cell
          v-for="(value, i) in hotSearch"
          :title="value"
          :key="i">
        </label-cell>
      </label-box>

      <div class="margin-15">历史搜索</div>
      <mt-cell v-for="(value, index) in logSearch" :key="index"
               :title="value" is-link>
        <i slot="icon" class="icon-clock2-o"></i>
      </mt-cell>
    </div>

  </div>
</template>

<script>

  import components from '../components';

  export default {
    name: 'template',

    data () {
      return {
        searchKey: '',
        searchResult: [
          {title: '广安'},
          {title: '广州'},
          {title: '广元'},
          {title: '广东'},
          {title: '广州'},
          {title: '广元'},
          {title: '广东'},
          {title: '广州'},
          {title: '广元'},
          {title: '广东'},
          {title: '广州'},
          {title: '广元'},
          {title: '广东'},
          {title: '广州'},
          {title: '广元'},
          {title: '广东'}
        ],
        hotSearch: [
          '北京',
          '成都',
          '重庆',
          '广州',
          '上海',
          '天津'
        ],
        logSearch: [
          '木门',
          '木门',
          '木门',
          '木门',
          '木门',
          '木门',
          '木门',
          '木门',
          '木门',
          '木门',
          '木门',
          '木门',
          '木门',
          '木门',
          '木门'
        ]
      }
    },
    components: {
      'label-box': components.labelBox,
      'label-cell': components.labelCell
    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";

  #search-page {
    height: 100vh;
    overflow: auto;
    padding-top: 55px;

    .mint-search-list { position: fixed; }
    .mint-cell-title i {  color: $gray-light; }

  }

</style>