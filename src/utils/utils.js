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
    console.log(`${text}\n`);
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

  static progression(first, step, length) {
    const result = [first];
    let current = first;

    for (let i = 0; i < length - 1; i += 1) {
      current += step;
      result.push(current);
    }

    return result;
  }

  static isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
}

export default Utils;
