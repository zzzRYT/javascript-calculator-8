export class Calculation {
  validation() {}

  sum(numbers) {
    const sumNumbers = numbers.reduce((acc, cur) => acc + cur);

    if (!sumNumbers) {
      throw new Error('잘못된 계산 입니다.');
    }

    return sumNumbers;
  }
}
