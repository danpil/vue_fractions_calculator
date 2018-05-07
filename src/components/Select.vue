<template>
  <select name="operator" style="width:60px; font-size: 24px;" v-model="currentOperator" @change="changeOperator">
    <option
      v-for="(operator, index) in operatorsList"
      :key="index"
      :value="operator"
    >
      {{ operator }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'Select',
  data() {
    return {
      operatorsList: ['+', '-', '×', '÷'],
      currentOperator: '+',
    };
  },
  methods: {
    changeOperator(event) {
      this.currentOperator = event.target.value;
      this.$emit('operatorChange', event.target.value);
    },
  },
  created() {
    this.$emit('operatorChange', this.currentOperator);
  },
};
</script>
