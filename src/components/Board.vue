<template>
  <div class="board">
    <square
      v-for="(square, index ) in squares"
      :square="square"
      :key="index"
    />
  </div>
</template>

<script>
import Square from './Square';

export default {
  name: 'board',
  components: { Square },
  computed: {
    squares () {
      const squaresPerRow = 8;
      let squares = [];
      for (let i = 0; i < squaresPerRow; i++) {
        for (let j = 0; j < squaresPerRow; j++) {
          let color = (j + i) % 2 ? 'dark' : 'light';
          squares.push({ color, row: i + 1, column: j + 1 });
        }
        // board += "\n";
      }
      return squares;
    }
  }
};
</script>

<style lang="scss">
.board {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
