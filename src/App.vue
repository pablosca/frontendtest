<template>
  <div id="app">
    <div class="container">
      <h1 class="title">Pablo's Chessboard</h1>

      <div class="wrapper">
        <main class="main">
          <Board/>
        </main>
        <aside class="side">
          <Display/>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import Board from './components/Board';
import Display from './components/Display';

export default {
  name: 'App',
  components: { Board, Display }
};
</script>

<style lang="scss">
body {
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 16px;
}
.container {
  background: #efefef;
  margin: 0 auto;
  max-width: 900px;
  padding: 15px;
}
.title {
  font-size: 24px;
  margin-bottom: 15px;
}
.wrapper {
  @media (min-width: 768px) {
    display: flex;
  }
}
.main {
  @media (max-width: 767px) {
    margin-bottom: 15px;
  }
  @media (min-width: 768px) {
    margin-right: 15px;
    width: 70%;
  }
}
.side {
  @media (min-width: 768px) {
    flex: 1;
  }
}
</style>
