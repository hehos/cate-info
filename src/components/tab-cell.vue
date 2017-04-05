<template>

  <div class="tab-cell"
    :class="{ 'on': $parent.value === item.id && isOn }">

    <a class="tab-cell-text"
          @click.stop="selected">
      {{ item.title }}
    </a>

    <div v-if="hasChild" class="tab-cell-popup-box">
      <slot></slot>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'tab-cell',

    props: {
      item: Object,
      hasChild: Array,
      value: {}
    },

    data () {
      return {
        isOn: false
      }
    },

    methods: {
      selected () {
        this.isOn = !this.isOn;
        this.$parent.$emit('input', this.item.id)

        this.$nextTick(() => {
          console.log(this.$parent.value);
          console.log(this.isOn);
        });
      }
    },

    components: {

    }
  }
</script>