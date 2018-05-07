<template>
<div>
<div class="ui large top hidden menu">
    <a class="active item" href="/#/">Home</a>
    <a class="item" href="/#/history">History</a>
</div>
  <div id="app">
    <router-view/>
  </div>
</div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
