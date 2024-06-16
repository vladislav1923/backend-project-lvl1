import BaseGame from './base-game.js';
import Utils from '../utils/utils.js';

class CalcGame extends BaseGame {
  operators = ['+', '-', '*'];

  expression() {
    const firstOperand = Utils.random(10);
    const secondOperand = Utils.random(10);
    const operator = this.operators[Utils.random(this.operators.length) - 1];

    switch (operator) {
      case '+':
        return {
          answer: String(firstOperand + secondOperand),
          question: `${firstOperand} + ${secondOperand}`,
        };
      case '-':
        return {
          answer: String(firstOperand > secondOperand
            ? firstOperand - secondOperand : secondOperand - firstOperand),
          question: firstOperand > secondOperand
            ? `${firstOperand} - ${secondOperand}` : `${secondOperand} - ${firstOperand}`,
        };
      default:
        return {
          answer: String(secondOperand * firstOperand),
          question: `${secondOperand} * ${firstOperand}`,
        };
    }
  }

  start() {
    this.greeting();
    this.title = 'What is the result of the expression?';
    this.quiz();
  }
}

export default CalcGame;
