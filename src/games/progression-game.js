import BaseGame from './base-game.js';
import Utils from '../utils/utils.js';

class ProgressionGame extends BaseGame {
  progressionLength = 10;

  expression() {
    const first = Utils.random();
    const step = Utils.random(10);
    const hiddenIndex = Utils.random(10);
    const progression = Utils.progression(first, step, this.progressionLength);
    const answer = String(progression[hiddenIndex]);
    const question = progression
      .map((n, i) => (i === hiddenIndex ? '..' : n))
      .join(' ');

    return { question, answer };
  }

  start() {
    this.greeting();
    this.title = 'What number is missing in the progression?';
    this.quiz();
  }
}

export default ProgressionGame;
