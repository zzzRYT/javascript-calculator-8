import { Console } from '@woowacourse/mission-utils';

import { INPUT_DESCRIPTION } from '../constants.js';

export class Screen {
  async displayUserInput() {
    const userInput = await Console.readLineAsync(`${INPUT_DESCRIPTION}\n`);
    return userInput;
  }

  displayResult(result) {
    Console.print(`결과 : ${result}`);
  }
}
