<template>
  <table class="ui celled striped table">
    <thead>
      <tr>
        <th>The	first	fraction</th>
        <th>Procedure	/ Operation</th>
        <th>Second	fraction</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in operations"
        :key="index"
      >
        <td>
          {{item.firstFraction}}
        </td>
        <td>{{item.operation}}</td>
        <td>{{item.secondFraction}}</td>
        <td>{{item.result}}</td>
      </tr>
    </tbody>
    <tfoot class="full-width">
    <tr>
      <th colspan="4">
        <div class="ui right floated small primary icon button" @click="clear">
          Clear History
        </div>
      </th>
    </tr>
  </tfoot>
  </table>
</template>

<script>
export default {
  name: 'Table',
  data() {
    return {};
  },
  methods: {
    clear() {
      this.$store.dispatch('clear');
    },
  },
  computed: {
    operations() {
      return this.$store.getters.operations;
    },
  },
};
</script>
