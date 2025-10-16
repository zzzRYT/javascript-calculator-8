import { Console } from '@woowacourse/mission-utils';

import { INPUT_DESCRIPTION } from '../constants.js';

export class Screen {
  constructor() {
    this.separator = [',', ':'];
    this.input = '';
  }

  async receiveUserInput() {
    const userInput = await Console.readLineAsync(`${INPUT_DESCRIPTION}\n`);
    this.input = userInput;
  }

  isCustomSeparator() {
    return this.input.indexOf('//') !== -1 && this.input.indexOf('\\n');
  }

  addCustomSeparator() {
    const customSeparator = this.input.slice(2, 3);
    this.separator.push(customSeparator);
    this.input = this.input.slice(5);
  }

  formattedString() {
    if (this.isCustomSeparator()) {
      this.addCustomSeparator();
    }
    const defaultSeparatorString = this.separator.join('|');
    const regex = new RegExp(`[${defaultSeparatorString}]`, 'g');
    const splitNumbers = this.input.split(regex).map(Number);
    return splitNumbers;
  }

  getNumberFromInput() {
    return this.formattedString();
  }

  calculatorDisplaySuccess(result) {
    Console.print(`결과 : ${result}`);
  }
}
