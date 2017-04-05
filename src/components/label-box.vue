<template>
  <div class="labels" :class="cols? 'label-col-' + cols: ''">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'label-box',

    props: {
      cols: Number
    },

    data () {
      return {

      }
    },
    components: {
    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";

  .labels {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: space-around;
    .label-cell {
      flex: 0 1 30.3%;
      background-color: #ffffff;
      text-align: center;
      line-height: 2.5;
      margin: 1.5%;
      border-radius: 2px;
    }

    $cols: 2, 4, 5, 6;
    @each $col in $cols {
      &.label-col-#{$col} {
        .label-cell {
          flex: 0 1 (1/$col) * 100% - 3%;
        }
      }
    }
  }

</style>