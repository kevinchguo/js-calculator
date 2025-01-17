/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

function calculatorModule() {

    var memory = 0;
    var total = 0;
    var calculator = {}

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

    calculator.load = function (x) {
        this.validations(x)
        total = x;
        return total;
    }

  /**
   * Return the value of `total`
   * @return { Number }
   */

    calculator.getTotal = function() {
        return total;
    }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

    calculator.add = function(x) {
        this.validations(x)
        total += x;
    }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

   calculator.subtract = function(x) {
        this.validations(x)
        total -= x;
   }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

   calculator.multiply = function(x) {
        this.validations(x)   
        total *= x;
   }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

    calculator.divide = function(x) {
        this.validations(x)
        total /= x;
    }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

   calculator.recallMemory = function() {
       return memory;
   }

  /**
   * Stores the value of `total` to `memory`
   */

   calculator.saveMemory = function() {
        memory = total;
   }

  /**
   * Clear the value stored at `memory`
   */
   calculator.clearMemory = function() {
       memory = 0;
   }
  /**
   * Validation
   */

   calculator.validations = function(x) {
       if (typeof x !== "number") {
           return "Error"
       }
   }


   return calculator;
}
console.log(calculatorModule().load(5))
console.log(calculatorModule().add(763))
console.log(calculatorModule().recallMemory())