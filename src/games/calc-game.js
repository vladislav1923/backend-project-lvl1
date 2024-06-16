import BaseGame from './base-game.js';
import Utils from '../utils/utils.js';

class CalcGame extends BaseGame {
  operators = ['+', '-', '*'];

  generateExpression() {
    const firstOperand = Utils.random(10);
    const secondOperand = Utils.random(10);
    const operator = this.operators[Utils.random(this.operators.length) - 1];
    let expectedAnswer = 0;
    let question = '';

    switch (operator) {
      case '+':
        expectedAnswer = firstOperand + secondOperand;
        question = `${firstOperand} + ${secondOperand}`;
        break;
      case '-':
        if (firstOperand > secondOperand) {
          expectedAnswer = firstOperand - secondOperand;
          question = `${firstOperand} - ${secondOperand}`;
        } else {
          expectedAnswer = secondOperand - firstOperand;
          question = `${secondOperand} - ${firstOperand}`;
        }
        break;
      case '*':
        expectedAnswer = firstOperand * secondOperand;
        question = `${firstOperand} * ${secondOperand}`;
        break;
      default:
        break;
    }

    const answer = Utils.question(`Question: ${question} \n`);
    Utils.print(`Your answer: ${answer}`);
    Utils.validate(Number(answer), expectedAnswer);
  }

  start() {
    this.greeting();
    Utils.print('What is the result of the expression?');
    try {
      Utils.conductSurvey(this.generateExpression.bind(this));
      Utils.print(`Congratulations, ${this.name}!`);
    } catch {
      Utils.print(`Let's try again, ${this.name}!`);
    }
  }
}

export default CalcGame;
