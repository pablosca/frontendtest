<template>
  <div
    class="square"
    :class="[ square.color, { 'active': isActive } ]"
    @click="onClick"
  ></div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'square',
  props: [ 'square' ],

  computed: {
    ...mapGetters([ 'activeSquare' ]),
    isActive () {
      return this.activeSquare.row === this.square.row && this.activeSquare.column === this.square.column;
    }
  },

  methods: {
    ...mapActions([ 'addClickedSquare' ]),
    onClick () {
      this.addClickedSquare(this.square);
    }
  }
};
</script>

<style lang="scss">
$dark: #4a2b18;
$light: #efb67b;
$active: #d80606;

.square {
  background: $light;
  cursor: pointer;
  width: 12.5%;

  &:hover {
    background: lighten($light, 8%);
  }

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  &.dark {
    background: $dark;
    &:hover {
      background: lighten($dark, 8%);
    }
  }

  &.active {
    background: $active;
    &:hover {
      background: lighten($active, 8%);
    }
  }
}
</style>
