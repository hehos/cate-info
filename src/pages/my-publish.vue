<template>
  <div id="user-page" class="bottom-bar-padding">

    <div class="white-bg media-small-imgtxt general-imgtxt2"
         v-for="(item, idx) in items" :key="idx">
      <a href="" class="img">
        <img :src="item.img" alt=""/>
      </a>
      <div class="media-txt">
        <h5 class="media-title"><a href="">
          {{ item.title }}</a></h5>
        <p class="media-explain">
          <span class="f-right time">
            <i class="icon-clock2-o"></i>{{ item.date }}
          </span>
          <span class="state">{{ item.state }} </span>
        </p>
      </div>

      <div class="bottom-acts">
        <mt-button plain size="small">
          <i class="icon-edit2"></i>继续发布
        </mt-button>
        <mt-button plain size="small">
          <i class="icon-trash-o"></i>删除
        </mt-button>
      </div>
    </div>


    <mt-button id="bottom-fixed-bar" size="large" type="primary"
               @click="$router.push('cate')">
      <i class="icon-edit2"></i>发布
    </mt-button>
  </div>
</template>

<script>
  export default {
    name: 'my-publish',

    data () {
      return {
        items: [
          {
            title: '1这是标题这是标题11这是标题这是标题1',
            img: '/static/image/img1.jpg',
            cateName: '门窗',
            address: '成都',
            date: '2017-3-15',
            state: '草稿'
          },
          {
            title: '2这是标题这是标题22这是标题这是标题2',
            img: '/static/image/img1.jpg',
            cateName: '门窗',
            address: '成都',
            date: '2017-3-15',
            state: '已发布'
          },
          {
            title: '3这是标题这是标题22这是标题这是标题2',
            img: '/static/image/img1.jpg',
            cateName: '门窗',
            address: '成都',
            date: '2017-3-15',
            state: '已过期'
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
        headerTitle: '我的发布'
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
    },
    components: {

    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";



</style>