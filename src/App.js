import { Calculator } from './modules/Calculator';
import { Screen } from './views/Screen';

class App {
  constructor() {
    this.separator = [',', ':'];
  }

  // App class (input) - 값을 받아서 에러를 발생시킬지 or calculator class를 실행할지 결정

  // calculator class (땨로 쪼개기?) - 그냥 계산, 중간에 validation

  // App class (output) - 어떤 값이 들어오든(에러든, 정상적인 데이터든) 받아서 표출할 수 있도록 함

  async run() {
    const screen = new Screen();
    const calculator = new Calculator();

    try {
      await screen.receiveUserInput();
      const numbers = screen.getNumberFromInput();
      const answer = calculator.sum(numbers);
      screen.displayOutput(answer, 'answer');
    } catch (error) {
      screen.displayOutput(error, 'error');
      throw error;
    }
  }
}

export default App;
