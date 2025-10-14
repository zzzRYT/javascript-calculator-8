import { Console } from '@woowacourse/mission-utils';

import { INPUT_DESCRIPTION } from './constants.js';

class App {
  constructor() {
    this.separator = [',', ':'];
  }

  // App class (input) - 값을 받아서 에러를 발생시킬지 or calculator class를 실행할지 결정

  // calculator class (땨로 쪼개기?) - 그냥 계산, 중간에 validation

  // App class (output) - 어떤 값이 들어오든(에러든, 정상적인 데이터든) 받아서 표출할 수 있도록 함

  addCustomSeparator() {}

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
    try {
      const userInput = await Console.readLineAsync(`${INPUT_DESCRIPTION}\n`);
      const answer = this.calculator(userInput);
      Console.print(answer);
    } catch (error) {
      Console.print(error);
    }
  }
}

export default App;
