import readlineSync from 'readline-sync';

class BaseGame {
  name;

  greeting() {
    console.log('Welcome to the Brain Games!');
    this.name = readlineSync.question('May I have your name?\n');
    console.log(`Hello ${this.name}!`);
  }

  start() {
    this.greeting();
  }
}

export default BaseGame;
