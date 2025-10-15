import { Console } from '@woowacourse/mission-utils';

import { INPUT_DESCRIPTION } from '../constants.js';

export class Screen {
  constructor() {
    this.separator = [',', ':'];
  }

  async receiveUserInput() {
    const userInput = await Console.readLineAsync(`${INPUT_DESCRIPTION}\n`);
    return userInput;
  }

  // 무조건 있어야 함
  validationDefaultSeparator() {}

  // 있을수도 없을수도 있음
  isValidationCustomSeparator() {}

  getNumberFromInput(input) {
    const defaultSeparatorString = this.separator.join('|');
    const regex = new RegExp(`[${defaultSeparatorString}]`, 'g');
    const splitNumbers = input.split(regex).map(Number);
    return splitNumbers;
  }
}
