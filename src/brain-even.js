import readlineSync from 'readline-sync';
import greeting from './greeting.js';

const generateQuestion = () => {
    const num = Math.floor(Math.random() * 100) + 1;
    const expectedAnswer = num % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${num} \n`);
    console.log(`Your answer: ${answer}`);
    const isCorrect = expectedAnswer === answer;
    if (isCorrect) {
        console.log(`Correct!`);
    } else {
        throw new Error();
    }
}

export default function()  {
    const name = greeting();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    try {
        generateQuestion();
        generateQuestion();
        generateQuestion();
        console.log(`Congratulations, ${name}!`);
    } catch {
        console.log(`Let's try again, ${name}!`);
    }
}
