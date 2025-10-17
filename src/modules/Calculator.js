import { selectedErrorResponse } from '../utils.js';

export class Calculator {
  #isMinus(target) {
    return target < 0;
  }

  #isNumber(target) {
    return Number.isInteger(target);
  }

  #validationCalculator(target) {
    return this.#isMinus(target) && this.#isNumber(target);
  }

  sum(numbers) {
    const sumNumbers = numbers.reduce((acc, curNumber) => {
      if (this.#validationCalculator(curNumber)) {
        throw new Error(selectedErrorResponse('calculator'));
      }
      return acc + curNumber;
    }, 0);

    return sumNumbers;
  }
}
