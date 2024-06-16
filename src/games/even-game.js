import BaseGame from './base-game.js';
import Utils from '../utils/utils.js';

class EvenGame extends BaseGame {
  answers = {
    positive: 'yes',
    negative: 'no',
  };

  expression() {
    const num = Utils.random();
    return {
      question: num,
      answer: num % 2 === 0 ? this.answers.positive : this.answers.negative,
    };
  }

  question() {
    const expression = this.expression();
    const answer = Utils.question(`Question: ${expression.question} \n`);
    Utils.print(`Your answer: ${answer}`);
    Utils.validate(
      answer,
      expression.answer,
      `'${answer}' is wrong answer ;(. Correct answer was '${expression.answer}'.`,
    );
  }

  start() {
    this.greeting();
    this.title = 'Answer "yes" if the number is even, otherwise answer "no".';
    this.quiz();
  }
}

export default EvenGame;
