<template>
  <ol v-if="clickedSquares.length" class="display">
    <li
      v-for="(square, index) in clickedSquares"
      :key="index"
    >
      <span class="display-item" :class="square.color">
        {{ letters[square.column - 1] + square.row }}
      </span>
    </li>
  </ol>
  <p v-else>You didn't click on any squares yet.</p>
</template>

<script>
import { mapState } from 'vuex';

const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

export default {
  name: 'display',
  computed: {
    ...mapState([ 'clickedSquares' ]),
    letters () {
      return LETTERS;
    }
  }
};
</script>

<style lang="scss">
.display {
  display: inline-block;
  margin: 0;
  padding-left: 25px;
}
.display-item {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: #333;
  display: inline-block;
  margin-bottom: 5px;
  padding: 4px 15px;
  text-align: center;
  width: 60px;

  &.dark {
    background: #333;
    border-color: #000;
    color: #fff;
  }
}
</style>
