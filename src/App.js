import { Console } from '@woowacourse/mission-utils';

import { INPUT_DESCRIPTION } from './constants.js';

class App {
  constructor() {
    this.separator = [',', ':'];
  }

  getSeparator(input) {
    const defaultSeparatorString = this.separator.join('|');
    const regex = new RegExp(`[${defaultSeparatorString}]`, 'g');
    const splitNumbers = input.split(regex);
    return splitNumbers;
  }

  calculator(input) {
    const splitNumbers = this.getSeparator(input);

    Console.print(splitNumbers);
  }

  async run() {
    const userInput = Console.readLineAsync(`${INPUT_DESCRIPTION}\n`);

    userInput.then((input) => {
      this.calculator(input);
    });
  }
}

export default App;
