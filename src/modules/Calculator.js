export class Calculator {
  isValidationMinus(number) {
    return number < 0;
  }

  sum(numbers) {
    const sumNumbers = numbers.reduce((acc, curNumber) => {
      if (this.isValidationMinus(curNumber)) {
        throw new Error('[ERROR] : 음수는 계산하지 않습니다.');
      }
      return acc + curNumber;
    }, 0);

    if (!sumNumbers) {
      throw new Error('[ERROR] : 잘못된 계산 입니다.');
    }

    return sumNumbers;
  }
}
