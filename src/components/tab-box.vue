<template>
  <div class="tab-wrap"
    :class="cols? 'tab-col-' + cols: ''">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'tab-box',

    props: {
      cols: Number,
      value: {}
    },

    data () {
      return {

      }
    },

    methods: {

    },

    created () {

    },

    components: {
    }
  }
</script>


<style lang="scss">

  @import "tab.scss";

</style>