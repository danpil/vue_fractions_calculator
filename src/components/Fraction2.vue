<template>
  <div id="fraction2">
    <input name="num3" :value="num3" type="number" step="any" class="calculatorShortInput" required="" @input="changeNum">
    <hr>
    <input name="num4" :value="num4" type="number" step="any" class="calculatorShortInput" required="" @input="changeNum">
  </div>
</template>
<script>
export default {
  name: 'Fraction2',
  data() {
    return {
      num3: '',
      num4: '',
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
