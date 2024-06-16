import BaseGame from './base-game.js';
import Utils from '../utils/utils.js';

class GcdGame extends BaseGame {
  expression() {
    const firstNum = Utils.random();
    const secondNum = Utils.random();
    return {
      question: `${firstNum} ${secondNum}`,
      answer: Utils.gcd(firstNum, secondNum),
    };
  }

  question() {
    const expression = this.expression();
    const answer = Utils.question(`Question: ${expression.question} \n`);
    Utils.print(`Your answer: ${answer}`);
    Utils.validate(
      Number(answer),
      expression.answer,
      `'${answer}' is wrong answer ;(. Correct answer was '${expression.answer}'.`,
    );
  }

  start() {
    this.greeting();
    this.title = 'Find the greatest common divisor of given numbers.';
    this.quiz();
  }
}

export default GcdGame;
