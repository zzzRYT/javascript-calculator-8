import { Calculator } from './modules/Calculator.js';
import { Screen } from './views/Screen.js';

class App {
  async run() {
    const screen = new Screen();
    const calculator = new Calculator();

    try {
      await screen.receiveUserInput();
      const numbers = screen.getNumberFromInput();
      const result = calculator.sum(numbers);
      screen.calculatorDisplaySuccess(result);
    } catch (error) {
      screen.calculatorDisplayError(error);
      throw error;
    }
  }
}

export default App;
