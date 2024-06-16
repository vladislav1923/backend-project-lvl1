import Utils from '../utils/utils.js';

class BaseGame {
  name;

  title;

  greeting() {
    Utils.print('Welcome to the Brain Games!');
    this.name = Utils.question('May I have your name?\n');
    Utils.print(`Hello, ${this.name}!`);
  }

  start() {
    this.greeting();
  }

  expression() {
    /* will be overridden */
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
