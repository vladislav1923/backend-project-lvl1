import BaseGame from './base-game.js';
import Utils from '../utils/utils.js';

class EvenGame extends BaseGame {
  answers = {
    positive: 'yes',
    negative: 'no',
  };

  question() {
    const num = Utils.random();
    const expectedAnswer = num % 2 === 0 ? this.answers.positive : this.answers.negative;
    const answer = Utils.question(`Question: ${num} \n`);
    Utils.print(`Your answer: ${answer}`);
    Utils.validate(
      answer,
      expectedAnswer,
      `'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`,
    );
  }

  start() {
    this.greeting();
    this.quiz(
      'Answer "yes" if the number is even, otherwise answer "no".',
      this.question.bind(this),
    );
  }
}

export default EvenGame;
