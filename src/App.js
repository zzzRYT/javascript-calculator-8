import { Calculator } from './modules/Calculator.js';
import { Screen } from './views/Screen.js';

import { selectedErrorResponse } from './utils.js';

import { CUSTOM_CONTAINER } from './constants.js';
import { Console } from '@woowacourse/mission-utils';
class App {
  constructor() {
    this.separator = [',', ':'];
    this.input = '';
  }

  getNumberFromInput(input) {
    this.input = input;
    return this.#formatString().map(Number);
  }

  #formatString() {
    if (this.#isCustomSeparator()) {
      this.#addCustomSeparator();
    }
    if (this.#isNoneCustomSeparator()) {
      throw new Error(selectedErrorResponse('input'));
    }

    const defaultSeparatorString = this.separator.join('|');
    const regex = new RegExp(`[${defaultSeparatorString}]`, 'g');
    return this.#splitInputString(regex);
  }

  #isCustomSeparator() {
    return (
      this.input.indexOf(CUSTOM_CONTAINER.START) !== -1 &&
      this.input.indexOf(CUSTOM_CONTAINER.END) !== -1
    );
  }

  #isNoneCustomSeparator() {
    const allowedSeparators = this.separator.join('');
    const pattern = new RegExp(`[^0-9${allowedSeparators}]`);
    return pattern.test(this.input);
  }

  #addCustomSeparator() {
    const startIndex =
      this.input.indexOf(CUSTOM_CONTAINER.START) +
      CUSTOM_CONTAINER.START.length;
    const endIndex = this.input.indexOf(CUSTOM_CONTAINER.END);
    const separator = this.input.substring(startIndex, endIndex);
    Console.print(separator);
    if (this.#isString(separator)) {
      throw new Error(selectedErrorResponse('input'));
    }
    this.separator.push(separator);
    this.input = this.input.slice(endIndex + CUSTOM_CONTAINER.END.length);
  }

  #isString(string) {
    return string.length > 1;
  }

  #splitInputString(splitTarget) {
    return this.input.split(splitTarget);
  }

  async run() {
    const screen = new Screen();
    const calculator = new Calculator();

    try {
      const input = await screen.displayUserInput();
      const numbers = this.getNumberFromInput(input);
      const result = calculator.sum(numbers);
      screen.displayResult(result);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
