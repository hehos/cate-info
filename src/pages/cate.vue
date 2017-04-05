<template>
  <div id="cate-page">
    <grid-box :cols="3">
      <grid-cell v-for="(item, idx) in gridCells"
         :key="idx"
         :item="item"
         :itemIdx="'cell-' + (idx+1)"
         :iconBg="iconBgs[idx]">
        <div slot="special-tag" class="special-tag">
          以订阅
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
      // 使用设置header信息
      this.$store.commit({
        type: 'setHeadInfo',
//        headerLeftText: '关闭',
//        headerRightIcon: 'icon-share2',
//        headerRightText: '分享',
        headerTitle: '选择分类'
      })

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
      padding-top: 20px;
      margin-top: 10px;
      .ico-box { position: relative; }
      .special-tag {
        position: absolute;
        top: 8px;
        right: -17px;
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