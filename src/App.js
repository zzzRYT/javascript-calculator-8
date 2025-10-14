import { Console } from '@woowacourse/mission-utils';

import { INPUT_DESCRIPTION } from './constants.js';

class App {
  constructor() {
    this.separator = [',', ':'];
  }

  getNumberFromInput(input) {
    const defaultSeparatorString = this.separator.join('|');
    const regex = new RegExp(`[${defaultSeparatorString}]`, 'g');
    const splitNumbers = input.split(regex).map(Number);
    return splitNumbers;
  }

  errorResponse(message) {
    throw new Error(`[Error]: ${message}`);
  }

  calculator(input) {
    const numbers = this.getNumberFromInput(input);
    const sumNumbers = numbers.reduce((acc, cur) => acc + cur);

    if (!sumNumbers) {
      this.errorResponse('잘못된 입력입니다.');
    }

    return sumNumbers;
  }

  async run() {
    const userInput = Console.readLineAsync(`${INPUT_DESCRIPTION}\n`);

    try {
      userInput.then((input) => {
        const answer = this.calculator(input);
        Console.print(answer);
      });
    } catch (error) {
      Console.print(error);
    }
  }
}

export default App;
