<template>
  <div id="fraction1">
    <input name="num1" :value="num1" type="number" step="any" class="calculatorShortInput" required="" @input="changeNum">
    <hr>
    <input name="num2" :value="num2" type="number" step="any" class="calculatorShortInput" required="" @input="changeNum">
  </div>
</template>

<script>
export default {
  name: 'Fraction1',
  data() {
    return {
      num1: '',
      num2: '',
    };
  },
  methods: {
    changeNum(event) {
      this[event.target.name] = event.target.value;
      this.$emit('numChange', { name: event.target.name, value: event.target.value });
    },
  },
};
</script>
