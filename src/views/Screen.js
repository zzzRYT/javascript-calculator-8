import { Console } from '@woowacourse/mission-utils';

import { CUSTOM_CONTAINER, INPUT_DESCRIPTION } from '../constants.js';

export class Screen {
  constructor() {
    this.separator = [',', ':'];
    this.input = '';
  }

  #isCustomSeparator() {
    return this.input.indexOf('//') !== -1 && this.input.indexOf('\\n');
  }

  #addCustomSeparator() {
    const startIndex =
      this.input.indexOf(CUSTOM_CONTAINER.START) +
      CUSTOM_CONTAINER.START.length;
    const endIndex = this.input.indexOf(CUSTOM_CONTAINER.END);
    const separator = this.input.substring(startIndex, endIndex);
    this.separator.push(separator);
    this.input = this.input.slice(endIndex + CUSTOM_CONTAINER.END.length);
    Console.print(this.input);
  }

  #splitInputString(splitTarget) {
    return this.input.split(splitTarget);
  }

  #formattedString() {
    if (this.#isCustomSeparator()) {
      this.#addCustomSeparator();
    }
    Console.print(this.separator);
    const defaultSeparatorString = this.separator.join('|');
    const regex = new RegExp(`[${defaultSeparatorString}]`, 'g');
    return this.#splitInputString(regex);
  }

  async receiveUserInput() {
    const userInput = await Console.readLineAsync(`${INPUT_DESCRIPTION}\n`);
    this.input = userInput;
  }

  getNumberFromInput() {
    return this.#formattedString().map(Number);
  }

  calculatorDisplaySuccess(result) {
    Console.print(`결과 : ${result}`);
  }
}
