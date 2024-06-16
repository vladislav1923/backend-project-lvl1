import BaseGame from "./base-game.js";
import readlineSync from "readline-sync";

class EvenGame extends BaseGame {
    generateQuestion() {
        const num = this.random();
        const expectedAnswer = num % 2 === 0 ? 'yes' : 'no';
        const answer = readlineSync.question(`Question: ${num} \n`);
        console.log(`Your answer: ${answer}`);
        this.validate(answer, expectedAnswer);
    };

    start() {
        this.greeting();
        console.log('Answer "yes" if the number is even, otherwise answer "no".');
        try {
            this.conductSurvey(this.generateQuestion.bind(this));
            console.log(`Congratulations, ${this.name}!`);
        } catch {
            console.log(`Let's try again, ${this.name}!`);
        }
    }
}

export default EvenGame;
