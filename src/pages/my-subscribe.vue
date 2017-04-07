<template>
  <div id="user-page" class="bottom-bar-padding">

    <div class="margin-t-10 swipe-list">

      <mt-cell-swipe class="margin-b-10"
                     v-for="(item, idx) in items" :key="idx"
                     :right="rightBtnConfig(item)"
                     :title="item.title"
                     :label="'类别：' + item.cateName"
                     :id="item.id">
      </mt-cell-swipe>

    </div>


    <mt-button id="bottom-fixed-bar" size="large" type="primary"
               @click="$router.push('cate-subscibe')">
      <i class="icon-edit2"></i>添加订阅
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
            distance: '300m',
            date: '2017-3-15'
          },
          {
            id: 2,
            title: '2这是标题这是标题22这是标题这是标题2',
            img: '/static/image/img1.jpg',
            cateName: '门窗',
            address: '成都',
            distance: '300m',
            date: '2017-3-15'
          },
          {
            id: 3,
            title: '3这是标题这是标题22这是标题这是标题2',
            img: '/static/image/img1.jpg',
            cateName: '门窗',
            address: '成都',
            distance: '300m',
            date: '2017-3-15'
          },
          {
            id: 4,
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
    computed: {
    },
    created: function () {
      // 设置header信息
      this.$store.commit({
        type: 'setHeadInfo',
        headerTitle: '我的订阅'
      });

      // 处理已读，删除逻辑
      let markReadConf =  {
        content: '标为已读',
        style: { background: 'orange', color: '#fff' }
      };
      // todo
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
    },
    mounted: function () {
    },
    components: {

    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";



</style>