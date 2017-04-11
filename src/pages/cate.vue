<template>
  <div id="cate-page">
    <mt-header title="选择发布类别" :fixed="true">
      <div slot="left" @click="$router.go(-1)">
        <i class="icon-angle-left3"></i>
      </div>
      <div slot="right">
        <router-link class="right-link" to="/my-publish">我的发布</router-link>
      </div>
    </mt-header>

    <grid-box :cols="3">
      <grid-cell v-for="(item, idx) in gridCells"
          :key="idx"
          :icon="item.icon"
          :title="item.title"
          :itemIdx="(idx+1)"
          :iconBg="iconBgs[idx]"
          :to="{name: 'publishForm'}">
      </grid-cell>
    </grid-box>
  </div>
</template>

<script>

  import components from '../components';

  export default {
    name: 'demo',

    data () {
      return {
        // 九宫格数据
        gridCells: [
          {title: '二手信息', icon: 'icon-home', route: '/publish-form'},
          {title: '招标投标', icon: 'icon-home', route: '/publish-form'},
          {title: '设备租凭', icon: 'icon-home', route: '/publish-form'},
          {title: '在建工地', icon: 'icon-home', route: '/publish-form'},
          {title: '招聘信息', icon: 'icon-home', route: '/publish-form'},
          {title: '求职信息', icon: 'icon-home', route: '/publish-form'},
          {title: '安装维修', icon: 'icon-home', route: '/publish-form'},
          {title: '促销活动', icon: 'icon-home', route: '/publish-form'},
          {title: '促销活动4', icon: 'icon-home', route: '/publish-form'}
        ],
        iconBgs: [
          '#ff7330', '#79bef5',
          '#f96364', '#b778fd',
          '#ffc42a', '#96d639',
          '#3dd7cd', '#6477ce',
          '#2ebbb2', '#83cc19'
        ]
      }
    },

    components: {
      'grid-box': components.gridBox,
      'grid-cell': components.gridCell
    },

    created: function () {

      // 请求数据
//      this.$http.get('/static/data/log.json',
//        {isLog: true}).then(data => {
//        const datas = data.body;
//
//        this.logItems = datas.logItems;
//      }, data => {
//        alert('获取数据失败！');
//      });
    }
  }
</script>

<style lang="scss">
  #cate-page {
    .grid-box {
      padding-top: 70px;
    }
    .grid-cell { margin-bottom: 25px; }
    .view-title { margin-top: 10px; }
    .grid-box .ico-box.isBg {
      width: 1.6em;
      height: 1.6em;
      line-height: 1.6;
      border-radius: .5em;
      font-size: 42px;
    }
  }
</style>