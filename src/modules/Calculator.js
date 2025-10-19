import { selectedErrorResponse } from '../utils.js';

export class Calculator {
  sum(numbers) {
    const sumNumbers = numbers.reduce((acc, curNumber) => {
      if (this.#isMinus(curNumber)) {
        throw new Error(selectedErrorResponse('calculator'));
      }
      return acc + curNumber;
    }, 0);

    if (this.#isOverflow(sumNumbers)) {
      throw new Error(selectedErrorResponse('calculator'));
    }

    if (this.#hasDecimal(sumNumbers)) {
      return sumNumbers.toFixed(1);
    }

    return sumNumbers;
  }

  #hasDecimal(value) {
    return typeof value === 'number' && value % 1 !== 0;
  }

  #isOverflow(value) {
    if (value > Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER) {
      return true;
    }
    return false;
  }

  #isMinus(value) {
    return value < 0;
  }
}
