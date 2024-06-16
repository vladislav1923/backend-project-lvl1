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
    Utils.validate(answer, expectedAnswer);
  }

  quiz() {
    Utils.print('Answer "yes" if the number is even, otherwise answer "no".');
    try {
      Utils.repeat(this.question.bind(this));
      Utils.print(`Congratulations, ${this.name}!`);
    } catch {
      Utils.print(`Let's try again, ${this.name}!`);
    }
  }

  start() {
    this.greeting();
    this.quiz();
  }
}

export default EvenGame;
