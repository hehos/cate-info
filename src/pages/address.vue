<template>
  <div id="address-page">

    <mt-header title="地区">
      <div slot="left">
        <i @click="$router.go(-1)" class="icon-angle-left3"></i>
      </div>
    </mt-header>

    <div class="search-bar">
      <mt-search v-model="searchValue">
        <mt-cell
          v-for="(item, index) in searchResult"
          :title="item.title"
          :key="index">
        </mt-cell>
      </mt-search>
    </div>



    <!-- 索引列表 -->
    <mt-index-list>
      <!-- start 非索引列表的内容（为了列表高度包含这些内容） -->
      <mt-index-section class="index-section-other" :index="null">

        <div class="margin-15 padding-13 white-bg current-address">
          当前：<strong>{{ currentAddress }}</strong>
        </div>

        <div class="margin-15">定位城市</div>
        <label-box class="margin-15">
          <label-cell :title="gpsAddress" leftIcon="icon-map2-o">
          </label-cell>
        </label-box>

        <div class="margin-15">热门城市</div>
        <label-box class="margin-15">
          <label-cell
            v-for="(value, i) in hotAddress"
            :title="value"
            :key="i">
          </label-cell>
        </label-box>

      </mt-index-section>
      <!-- end 非索引列表的内容 -->

      <!-- 索引列表相关内容 -->
      <mt-index-section v-for="item in alphabet" :index="item.initial" :key="item.initial">
        <mt-cell v-for="cell in item.cells" :title="cell" :key="cell"></mt-cell>
      </mt-index-section>

    </mt-index-list>

  </div>
</template>

<script>

  import components from '../components';

  const NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane'];

  export default {
    name: 'address',
    data () {
      return {
        searchValue: '',

        alphabet: [],
        currentAddress: '成都',
        gpsAddress: '成都',
        hotAddress: [
          '北京',
          '成都',
          '重庆',
          '广州',
          '上海',
          '天津'
        ],
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
        ]
      }
    },
    created() {
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
        let cells = NAMES.filter(name => name[0] === initial);
        this.alphabet.push({
          initial,
          cells
        });
      });
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

  #address-page {
    height: 100vh;
    .mint-search-list {
      top: 48px + 55px;
      bottom: 0;
    }
    .index-section-other {
      .mint-indexsection-index { display: none; }
    }
    .current-address {
      font-size: 15px;
      strong { color: #666666; }
    }
  }


</style>