import Utils from '../utils/utils.js';

class BaseGame {
  name;

  greeting() {
    Utils.print('Welcome to the Brain Games!');
    this.name = Utils.question('May I have your name?\n');
    Utils.print(`Hello ${this.name}!`);
  }

  start() {
    this.greeting();
  }

  quiz(title, question) {
    Utils.print(title);
    try {
      Utils.repeat(question);
      Utils.print(`Congratulations, ${this.name}!`);
    } catch {
      Utils.print(`Let's try again, ${this.name}!`);
    }
  }
}

export default BaseGame;
