import { Console } from '@woowacourse/mission-utils';

import { INPUT_DESCRIPTION } from './constants.js';
import { Calculator } from './Calculator.js';

class App {
  constructor() {
    this.separator = [',', ':'];
  }

  // App class (input) - 값을 받아서 에러를 발생시킬지 or calculator class를 실행할지 결정

  // calculator class (땨로 쪼개기?) - 그냥 계산, 중간에 validation

  // App class (output) - 어떤 값이 들어오든(에러든, 정상적인 데이터든) 받아서 표출할 수 있도록 함

  getNumberFromInput(input) {
    const defaultSeparatorString = this.separator.join('|');
    const regex = new RegExp(`[${defaultSeparatorString}]`, 'g');
    const splitNumbers = input.split(regex).map(Number);
    return splitNumbers;
  }

  async receiveUserInput() {
    const userInput = await Console.readLineAsync(`${INPUT_DESCRIPTION}\n`);
    const numbers = this.getNumberFromInput(userInput);
    return numbers;
  }

  errorResponse(message) {
    throw new Error(`[Error]: ${message}`);
  }

  async run() {
    const calculator = new Calculator();

    try {
      const numbers = await this.receiveUserInput();
      const answer = calculator.sum(numbers);
      Console.print(answer);
    } catch (error) {
      Console.print(error);
    }
  }
}

export default App;
