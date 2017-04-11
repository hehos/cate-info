<template>
  <a class="grid-cell"
     :class="itemIdx ? 'cell-' + itemIdx : ''"
     :href="href">
    <slot>
      <div class="ico-box" :class="iconBg ? 'isBg': ''"
        :style="iconStyle">
        <slot name="icon">
          <i v-if="icon" :class="icon"></i>
          <img v-else-if="img" :src="img" :alt="title">
          <i v-else class="icon-shop-o"></i>
        </slot>

        <slot name="special-tag"></slot>
      </div>
      <slot name="title">
        <div class="cell-title" v-text="title"></div>
      </slot>
    </slot>

  </a>
</template>

<script>
  export default {
    name: 'grid-cell',

    props: {
      to: [String, Object],
      // item data
      icon: String,
      img: String,
      title: String,

      itemIdx: Number,
      iconBg: String,
      iconColor: String
    },

    data () {
      return {
        iconStyle: {
          backgroundColor: this.iconBg,
          color: this.iconColor
        }
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
