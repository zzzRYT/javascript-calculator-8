import { Calculator } from './modules/Calculator.js';
import { Screen } from './views/Screen.js';

import { selectedErrorResponse } from './utils.js';

import { CUSTOM_CONTAINER } from './constants.js';
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

  #addCustomSeparator() {
    const startIndex =
      this.input.indexOf(CUSTOM_CONTAINER.START) +
      CUSTOM_CONTAINER.START.length;
    const endIndex = this.input.indexOf(CUSTOM_CONTAINER.END);
    const separator = this.input.substring(startIndex, endIndex);
    if (this.#isString(separator)) {
      throw new Error(selectedErrorResponse('input'));
    }
    this.separator.push(separator);
    this.input = this.input.slice(endIndex + CUSTOM_CONTAINER.END.length);
  }

  #isString(string) {
    return string.length > 1;
  }

  #isNoneCustomSeparator() {
    const separators = this.input
      .split(/([0-9.]+)/)
      .filter((v, i) => i % 2 === 0 && v !== '');

    return separators.some((sep) =>
      sep.split('').some((char) => !this.separator.includes(char))
    );
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
