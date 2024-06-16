import readlineSync from 'readline-sync';
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
    const answer = readlineSync.question(`Question: ${num} \n`);
    console.log(`Your answer: ${answer}`);
    Utils.validate(answer, expectedAnswer);
  }

  start() {
    this.greeting();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    try {
      Utils.conductSurvey(this.generateQuestion.bind(this));
      console.log(`Congratulations, ${this.name}!`);
    } catch {
      console.log(`Let's try again, ${this.name}!`);
    }
  }
}

export default EvenGame;
