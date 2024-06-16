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
          answer: firstOperand + secondOperand,
          question: `${firstOperand} + ${secondOperand}`,
        };
      case '-':
        return {
          answer: firstOperand > secondOperand
            ? firstOperand - secondOperand : secondOperand - firstOperand,
          question: firstOperand > secondOperand
            ? `${firstOperand} - ${secondOperand}` : `${secondOperand} - ${firstOperand}`,
        };
      default:
        return {
          answer: secondOperand * firstOperand,
          question: `${secondOperand} * ${firstOperand}`,
        };
    }
  }

  question() {
    const expression = this.expression();
    const answer = Utils.question(`Question: ${expression.question} \n`);
    Utils.print(`Your answer: ${answer}`);
    Utils.validate(Number(answer), expression.answer);
  }

  start() {
    this.greeting();
    this.quiz(
      'What is the result of the expression?',
      this.question.bind(this),
    );
  }
}

export default CalcGame;
