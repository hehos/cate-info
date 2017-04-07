<template>
  <div id="cate-page">
    <mt-header title="选择发布类别" :fixed="true">
      <div slot="left" @click="$router.go(-1)">
        <i class="icon-angle-left3"></i>
      </div>
    </mt-header>

    <grid-box :cols="3">
      <grid-cell v-for="(item, idx) in gridCells"
         :key="idx"
         :item="item"
         :itemIdx="(idx+1)"
         :iconBg="iconBgs[idx]">
        <div slot="special-tag" class="special-tag">
          已订阅
        </div>
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
      .ico-box { position: relative; }
      .special-tag {
        position: absolute;
        top: 8px;
        right: -18px;
        width: 3em;
        line-height: 1.3;
        margin-left: 1.3em;
        margin-right: 1.3em;
        background-color: #f3f3f3;
        font-size: 12px;
        color: #ff0000;
        transform: rotate(45deg) scale(1);
        &:before, &:after {
          content: "";
          display: inline-block;
          width: 0;
          height: 0;
          position: absolute;
         top: 0;
        }
        &:before {
           left: -1em;
           border-bottom: 1.3em solid #f3f3f3;
           border-right: 0 solid transparent;
           border-left: 1em solid transparent;
         }
        &:after {
           right: -1em;
           border-bottom: 1.3em solid #f3f3f3;
           border-right: 1em solid transparent;
           border-left: 0 solid transparent;
         }
      }
    }
  }
</style>