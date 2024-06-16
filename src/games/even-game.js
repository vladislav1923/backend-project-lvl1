import BaseGame from './base-game.js';
import Utils from '../utils/utils.js';

class EvenGame extends BaseGame {
  answers = {
    positive: 'yes',
    negative: 'no',
  };

  generateQuestion() {
    const num = Utils.random();
    const expectedAnswer = num % 2 === 0 ? this.answers.positive : this.answers.negative;
    const answer = Utils.question(`Question: ${num} \n`);
    Utils.print(`Your answer: ${answer}`);
    Utils.validate(answer, expectedAnswer);
  }

  start() {
    this.greeting();
    Utils.print('Answer "yes" if the number is even, otherwise answer "no".');
    try {
      Utils.conductSurvey(this.generateQuestion.bind(this));
      Utils.print(`Congratulations, ${this.name}!`);
    } catch {
      Utils.print(`Let's try again, ${this.name}!`);
    }
  }
}

export default EvenGame;
