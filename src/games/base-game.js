import readlineSync from "readline-sync";

class BaseGame {
    name;

    greeting() {
        console.log('Welcome to the Brain Games!');
        this.name = readlineSync.question('May I have your name?\n');
        console.log(`Hello ${this.name}!`);
    }

    random(max = 100) {
        return Math.floor(Math.random() * max) + 1;
    }

    validate(answer, correct) {
        if (correct === answer) {
            console.log('Correct!');
        } else {
            throw new Error();
        }
    }

    conductSurvey(fn, num = 3) {
        let i = 0
        while(i < num) {
            fn();
            i++;
        }
    }

    start() {
        this.greeting();
    }
}

export default BaseGame;
