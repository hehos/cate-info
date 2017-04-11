<template>
  <a class="label-cell" :href="href">
    <slot name="leftIcon">
      <i v-if="leftIcon" :class="leftIcon"></i>
    </slot>
    <slot>
      <span class="label-cell-text">{{ title }}</span>
    </slot>
    <slot name="rightIcon">
      <i v-if="rightIcon" :class="rightIcon"></i>
    </slot>
  </a>
</template>

<script>
  export default {
    name: 'label-cell',

    props: {
      to: [String, Object],
      title: String,
      leftIcon: String,
      rightIcon: String
    },
    data () {
      return {

      }
    },

    computed: {
      href () {
        if (this.to && !this.added && this.$router) {
          const resolved = this.$router.match(this.to);
          if (!resolved.matched.length) return this.to;

          this.$nextTick(() => {
            this.added = true;
            this.$el.addEventListener('click', this.handleClick);
          });
          return resolved.path;
        }
        return this.to;
      } 
    },

    methods: {
      handleClick ($event) {
        $event.preventDefault();
        this.$router.push(this.href);
      }
    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";



</style>