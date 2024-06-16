import BaseGame from './base-game.js';
import Utils from '../utils/utils.js';

class GcdGame extends BaseGame {
  /* eslint-disable-next-line class-methods-use-this */
  expression() {
    const firstNum = Utils.random();
    const secondNum = Utils.random();
    return {
      question: `${firstNum} ${secondNum}`,
      answer: String(Utils.gcd(firstNum, secondNum)),
    };
  }

  start() {
    this.greeting();
    this.title = 'Find the greatest common divisor of given numbers.';
    this.quiz();
  }
}

export default GcdGame;
