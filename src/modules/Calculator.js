export class Calculator {
  isValidationMinus(number) {
    return number < 0;
  }

  sum(numbers) {
    let sumNumbers = 0;
    for (let i = 0; i < numbers.length; i++) {
      const curNumber = numbers[i];
      if (this.isValidationMinus(curNumber)) {
        throw new Error('[ERROR] : 음수는 계산하지 않습니다.');
      }
      sumNumbers += curNumber;
    }

    if (!sumNumbers) {
      throw new Error('[ERROR] : 잘못된 계산 입니다.');
    }

    return sumNumbers;
  }
}
