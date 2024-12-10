// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
    return 8 * ratePerHour
  }
  
  /**
   * Calculates the number of days in a budget, rounded down
   *
   * @param {number} budget: the total budget
   * @param {number} ratePerHour: the rate per hour
   * @returns {number} the number of days
   */
  export function daysInBudget(budget, ratePerHour) {
    // Suponiendo que el freelancer trabaja 8 horas por día
      const hoursPerDay = 8;
      
      // Calcula el número total de horas que se pueden trabajar con el presupuesto
      const totalHours = budget / ratePerHour;
  
      
      // Calcula el número total de días trabajados (redondeando hacia abajo)
      const daysWorked = Math.floor(totalHours / hoursPerDay);
      
      return daysWorked;
  }
  
  /**
   * Calculates the discounted rate for large projects, rounded up
   *
   * @param {number} ratePerHour
   * @param {number} numDays: number of days the project spans
   * @param {number} discount: for example 20% written as 0.2
   * @return {number} the rounded up discounted rate
   */
  export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    
    const hoursPerDay = 8
    const totalWithoutDiscount = (hoursPerDay * numDays) * ratePerHour

    if (discount === 0){
      return totalWithoutDiscount
    }
    
    const totalMonthComplete = Math.floor(numDays / 22)
    const totalDiscountedDays = totalMonthComplete * 22
    const totalDiscountedRate = totalDiscountedDays * hoursPerDay * ratePerHour * (1 - discount)
    const remainingDays = numDays - totalDiscountedDays
    const totalWithDiscount = totalDiscountedRate + (remainingDays * hoursPerDay * ratePerHour)

    return Math.ceil(totalWithDiscount)
  }


  const actual = priceWithMonthlyDiscount(29.654321, 220, 0.112);
  const expected = 46347;
  console.log(actual, expected);
