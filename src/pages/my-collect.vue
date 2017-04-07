<template>
  <div id="user-page" class="bottom-bar-padding ">

    <div class="swipe-list collect-list">
      <mt-cell-swipe class="margin-b-10"
               v-for="(item, idx) in items" :key="idx"
               :right="rightBtnConfig(item)"
               :title="item.title"
               :label="item.state"
               :id="item.id">
        <span class="time">{{ item.date }}</span>
        <span slot="icon" class="img"><img :src="item.img" alt=""></span>
      </mt-cell-swipe>
    </div>

    <mt-button id="bottom-fixed-bar" size="large" type="primary"
               @click="$router.push('cate')">
      <i class="icon-edit2"></i>发布新信息
    </mt-button>
  </div>
</template>

<script>
  export default {
    name: 'my-collect',

    data () {
      return {
        items: [
          {
            id: 1,
            title: '1这是标题这是标题11这是标题这是标题1',
            img: '/static/image/img1.jpg',
            cateName: '门窗',
            address: '成都',
            state: '已失效',
            date: '2017-3-15'
          },
          {
            id: 2,
            title: '2这是标题这是标题22这是标题这是标题2',
            img: '/static/image/img1.jpg',
            cateName: '门窗',
            address: '成都',
            state: '',
            date: '2017-3-15'
          },
          {
            id: 3,
            title: '3这是标题这是标题22这是标题这是标题2',
            img: '/static/image/img1.jpg',
            cateName: '门窗',
            address: '成都',
            state: '已失效',
            date: '2017-3-15'
          },
          {
            id: 4,
            title: '4这是标题这是标题22这是标题这是标题2',
            img: '/static/image/img1.jpg',
            cateName: '门窗',
            address: '成都',
            state: '',
            date: '2017-3-15'
          }
        ]
      }
    },
    created: function () {
      // 使用设置header信息
      this.$store.commit({
        type: 'setHeadInfo',
//        headerLeftText: '关闭',
//        headerRightIcon: 'icon-share2',
//        headerRightText: '分享',
        headerTitle: '我的收藏'
      })

      // 处理已读，删除逻辑
      let markReadConf =  {
        content: '标为已读',
        style: { background: 'orange', color: '#fff' }
      };
      markReadConf.handler = () => {
        markReadConf.content = markReadConf.content === '标为已读' ? '标为未读' : '标为已读';
        console.log(markReadConf.content);
      }
      this.rightBtnConfig = function (item) {
        var id = item.id;
        return [
          markReadConf,
          {
            content: '删除',
            style: { background: 'red', color: '#fff' },
            handler: () => {
              this.$messagebox.confirm('确定删除?').then(action => {
                this.items = this.items.filter(function (item) {
                  return item.id !== id;
                })
              });
            }
          }
        ];
      }

      // 请求数据
//      this.$http.get('/static/data/log.json',
//        {isLog: true}).then(data => {
//        const datas = data.body;
//
//        this.logItems = datas.logItems;
//      }, data => {
//        alert('获取数据失败！');
//      });
    },
    components: {

    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";



</style>