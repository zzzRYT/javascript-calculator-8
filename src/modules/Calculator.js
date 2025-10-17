import { selectedErrorResponse } from '../utils.js';

export class Calculator {
  #isValidationMinus(number) {
    return number < 0;
  }

  sum(numbers) {
    const sumNumbers = numbers.reduce((acc, curNumber) => {
      if (this.#isValidationMinus(curNumber)) {
        throw new Error(selectedErrorResponse('calculator'));
      }
      return acc + curNumber;
    }, 0);

    if (!sumNumbers) {
      throw new Error(selectedErrorResponse('calculator'));
    }

    return sumNumbers;
  }
}
