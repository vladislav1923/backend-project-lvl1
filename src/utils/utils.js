class Utils {
  static random(max = 100) {
    return Math.floor(Math.random() * max) + 1;
  }

  static validate(answer, correct) {
    if (correct === answer) {
      console.log('Correct!');
    } else {
      throw new Error();
    }
  }

  static conductSurvey(fn, num = 3) {
    let i = 0;
    while (i < num) {
      fn();
      i += 1;
    }
  }
}

export default Utils;
