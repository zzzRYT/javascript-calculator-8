export class Calculator {
  #numbers;
  constructor(numbers) {
    this.#numbers = numbers;
  }

  validation() {}

  sum(numbers) {
    const sumNumbers = numbers.reduce((acc, cur) => acc + cur);

    if (!sumNumbers) {
      this.errorResponse('잘못된 입력입니다.');
    }

    return sumNumbers;
  }
}
