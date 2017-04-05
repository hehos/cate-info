<template>

  <mt-header :title="headerTitle" :fixed="isFixed">
    <div slot="left">
      <i @click="backGo" class="icon-angle-left3"></i>
      <span v-if="headerLeftText">{{ headerLeftText }}</span>
    </div>
    <div slot="right">
      <i v-if="headerRightIcon" :class="headerRightIcon"></i>
      <span v-if="headerRightText">{{ headerRightText }}</span>
    </div>
  </mt-header>

</template>

<script>

  export default {
    data () {
      return {

      }
    },
    methods: {
      backGo () {
        // 设置header信息
        this.$store.commit({
          type: 'setHeadInfo',
          isFixed: false
        });
        this.$router.go(-1);
      }
    },
    // todo 有待优化
    computed: {
      headerTitle () { return this.$store.state.headerTitle },
      headerLeftText () { return this.$store.state.headerLeftText },
      headerRightIcon () { return this.$store.state.headerRightIcon },
      headerRightText () { return this.$store.state.headerRightText },
      isFixed () { return this.$store.state.isFixed }
    },
//    computed: window.Object.assign({}, this.$store.state),
    created: function () {
    }
  }

</script>
