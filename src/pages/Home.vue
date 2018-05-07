<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="ui container">
      <div id="form" class="calculator_form" style="display: block;">
	      <h2>Standard fractions calculator</h2>

	      <div style="width:auto; position:relative;" align="center">

	        <form>
            <div class="form">
              <my-fraction1 @numChange="numChange"></my-fraction1>
              <my-select @operatorChange="operatorChange"></my-select>
              <my-fraction2 @numChange="numChange"></my-fraction2>

              <div id="equals">=</div>

              <my-fraction3 :num5="num5" :num6="num6"></my-fraction3>

              <br style="clear:both;"><br>
            </div>

            <div class="submitButtons">
              <button class="calculatorButton" @click="calcFraction">
                Calculate
              </button>
	          </div>

	        </form>
	      </div>

	    </div>
    </div>
  </div>
</template>

<script>
import Fraction1 from '@/components/Fraction1';
import Fraction2 from '@/components/Fraction2';
import Fraction3 from '@/components/Fraction3';
import Select from '@/components/Select';

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Calculate App',
      num1: '',
      num2: '',
      num3: '',
      num4: '',
      num5: '',
      num6: '',
      operator: '',
    };
  },
  methods: {
    calcFraction(event) {
      event.preventDefault();

      if (this.num1 && this.num2 && this.num3 && this.num4) {
        switch (this.operator) {
          case '+':
            this.num5 =
              parseInt(this.num1) * parseInt(this.num4) + parseInt(this.num2) * parseInt(this.num3);
            this.num6 = parseInt(this.num2) * parseInt(this.num4);
            break;
          case '-':
            this.num5 =
              parseInt(this.num1) * parseInt(this.num4) - parseInt(this.num2) * parseInt(this.num3);
            this.num6 = parseInt(this.num2) * parseInt(this.num4);
            break;
          case '×':
            this.num5 = parseInt(this.num1) * parseInt(this.num3);
            this.num6 = parseInt(this.num2) * parseInt(this.num4);
            break;
          case '÷':
            this.num5 = parseInt(this.num1) * parseInt(this.num4);
            this.num6 = parseInt(this.num2) * parseInt(this.num3);
            break;
        }

        this.$store.dispatch('save', {
          firstFraction: `${this.num1}/${this.num2}`,
          operation: `${this.operator}`,
          secondFraction: `${this.num3}/${this.num4}`,
          result: `${this.num5}/${this.num6}`,
        });
      }
    },
    numChange(event) {
      this[event.name] = event.value;
    },
    operatorChange(event) {
      this.operator = event;
    },
  },
  components: {
    'my-fraction1': Fraction1,
    'my-fraction2': Fraction2,
    'my-fraction3': Fraction3,
    'my-select': Select,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.form {
  display: inline-block;
}

#fraction1,
#fraction2,
#fraction3 {
  position: relative;
  float: left;
  margin-right: 20px;
}

#fraction1 > input,
#fraction2 > input,
#fraction3 > input {
  height: 35px;
  float: none;
  width: 75px;
  padding: 2px;
  border: 1px solid #666;
  border-radius: 5px;
}

select {
  position: relative;
  float: left;
  margin-right: 20px;
  top: 30px;
  border: 1px solid #666;
}

#equals {
  position: relative;
  float: left;
  top: 33px;
  font-size: 35px;
  color: #000;
  font-weight: bold;
  margin-right: 20px;
}

.submitButtons button {
  height: 35px;
  border-radius: 5px;
}
</style>
