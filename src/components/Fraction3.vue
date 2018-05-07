<template>
  <div id="fraction3">
    <input name="num5" :value="num5" type="number" step="any" class="calculatorShortInput" required="" disabled>
    <hr>
    <input name="num6" :value="num6" type="number" step="any" class="calculatorShortInput" required="" disabled>
  </div>
</template>

<script>
export default {
  name: 'Fraction3',
  props: ['num5', 'num6'],
  data() {
    return {};
  },
};
</script>
