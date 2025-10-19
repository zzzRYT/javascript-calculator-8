import { Calculator } from './modules/Calculator.js';
import { Screen } from './views/Screen.js';

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

  #isCustomSeparator() {
    return (
      this.input.indexOf(CUSTOM_CONTAINER.START) !== -1 &&
      this.input.indexOf(CUSTOM_CONTAINER.END)
    );
  }

  #addCustomSeparator() {
    const startIndex =
      this.input.indexOf(CUSTOM_CONTAINER.START) +
      CUSTOM_CONTAINER.START.length;
    const endIndex = this.input.indexOf(CUSTOM_CONTAINER.END);
    const separator = this.input.substring(startIndex, endIndex);
    this.separator.push(separator);
    this.input = this.input.slice(endIndex + CUSTOM_CONTAINER.END.length);
  }

  #splitInputString(splitTarget) {
    return this.input.split(splitTarget);
  }

  #formatString() {
    if (this.#isCustomSeparator()) {
      this.#addCustomSeparator();
    }
    const defaultSeparatorString = this.separator.join('|');
    const regex = new RegExp(`[${defaultSeparatorString}]`, 'g');
    return this.#splitInputString(regex);
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
