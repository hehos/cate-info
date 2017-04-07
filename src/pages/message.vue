<template>
  <div id="user-page" class="">

    <div class="margin-t-10 swipe-list">

      <mt-cell-swipe class="margin-b-10"
        v-for="(item, idx) in items" :key="idx"
        :right="rightBtnConfig(item)"
        :title="item.title"
        :label="'时间：' + item.date"
        :id="item.id">
      </mt-cell-swipe>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'message',

    data () {
      return {
        items: [
          {
            id: 1,
            title: '1这是标题这是标题11这是标题这是标题1',
            date: '2017-3-15'
          },
          {
            id: 2,
            title: '2这是标题这是标题22这是标题这是标题2',
            date: '2017-3-15'
          },
          {
            id: 3,
            title: '3这是标题这是标题22这是标题这是标题2',
            date: '2017-3-15'
          },
          {
            id: 4,
            title: '4这是标题这是标题22这是标题这是标题2',
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
        headerTitle: '消息'
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