/* Method syntax in ES6, when defining a method inside an object,
 * you can skip the `function` keyword and colon `:`
 */
import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);

  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros() {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
