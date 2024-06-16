import Utils from '../utils/utils.js';

class BaseGame {
  name;

  title;

  greeting() {
    Utils.print('Welcome to the Brain Games!');
    this.name = Utils.question('May I have your name?\n');
    Utils.print(`Hello ${this.name}!`);
  }

  start() {
    this.greeting();
  }

  question() {
    /* will be overridden */
  }

  quiz() {
    Utils.print(this.title);
    try {
      Utils.repeat(this.question.bind(this));
      Utils.print(`Congratulations, ${this.name}!`);
    } catch (e) {
      if (e.message) {
        Utils.print(e.message);
      }
      Utils.print(`Let's try again, ${this.name}!`);
    }
  }
}

export default BaseGame;
