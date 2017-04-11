<template>

  <a class="tab-popup-cell"
       :class="{ 'on': $parent.value === id }"
       @click.stop="selected">
    <i v-if="leftIcon"></i>
    {{ title }}
    <span class="f-right"><i v-if="rightIcon"></i></span>
  </a>

</template>

<script>
  export default {
    name: 'tab-popup-cell',

    props: {
      id: [Number, String],
      title: String,

      leftIcon: Boolean,
      rightIcon: Boolean
    },

    data () {
      return {

      }
    },

    methods: {
      selected () {
        this.$parent.$emit('input', this.id);
//        this.$nextTick(() => console.log(this.$parent.value));
      }
    },

    components: {

    }
  }
</script>


<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";



</style>