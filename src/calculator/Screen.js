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
    const customStartIndex = this.input.indexOf('//');
    const customEndIndex = this.input.indexOf('\\n');
    if (customStartIndex !== -1 && customEndIndex !== -1) {
      return true;
    }
    return false;
  }

  // 있을수도 없을수도 있음
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
    this.addCustomSeparator();
    return splitNumbers;
  }

  getNumberFromInput() {
    return this.formattedString();
  }

  displayOutput() {}
}
