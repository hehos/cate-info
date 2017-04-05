<template>
  <div id="index-page">

    <div class="margin-t-10">

      <div class="white-bg media-small-imgtxt general-imgtxt2"
           v-for="(item, idx) in items" :key="idx">
        <a class="img">
          <img :src="item.img" alt=""/>
        </a>
        <div class="media-txt">
          <h5 class="media-title"><a>
            {{ item.title }}</a></h5>
          <p class="media-explain">
              <span class="f-right like-btn on">
                <i class="icon-thumbs-o-up"></i>
                <i class="icon-thumbs-up"></i>
                {{ item.likeNum }}
              </span>
            阅读：{{ item.readNum }}
          </p>
        </div> 
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'headline',

    data () {
      return {
        items: [
          {
            title: '1这是标题这是标题11这是标题这是标题1',
            img: '/static/image/img1.jpg',
            readNum: 888,
            likeNum: 88
          },
          {
            title: '2这是标题这是标题11这是标题这是标题1',
            img: '/static/image/img1.jpg',
            readNum: 888,
            likeNum: 88
          },
          {
            title: '3这是标题这是标题11这是标题这是标题1',
            img: '/static/image/img1.jpg',
            readNum: 888,
            likeNum: 88
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
        headerTitle: '九正头条'
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