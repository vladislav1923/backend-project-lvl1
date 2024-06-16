import readlineSync from 'readline-sync';

class Utils {
  static random(max = 100) {
    return Math.floor(Math.random() * max) + 1;
  }

  static validate(answer, correct, errorMessage) {
    if (correct === answer) {
      Utils.print('Correct!');
    } else {
      throw new Error(errorMessage);
    }
  }

  static repeat(fn, num = 3) {
    let i = 0;
    while (i < num) {
      fn();
      i += 1;
    }
  }

  static print(text) {
    console.log(text);
  }

  static question(text) {
    return readlineSync.question(text);
  }

  static gcd(a, b) {
    if (!b) {
      return a;
    }

    return Utils.gcd(b, a % b);
  }
}

export default Utils;
