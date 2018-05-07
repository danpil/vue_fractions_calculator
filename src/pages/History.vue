<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{ lengthArray }}</div>
    <div class="ui container">
      <component :is="component"></component>
    </div>
  </div>
</template>

<script>
import Table from '@/components/Table';

export default {
  name: 'History',
  data() {
    return {
      msg: 'Welcome to History Page',
      component: Table,
    };
  },
  computed: {
    lengthArray() {
      return this.$store.getters.operations.length;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
