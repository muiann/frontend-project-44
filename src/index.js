
import readlineSync from 'readline-sync';
import {greetings} from './games/brain-calc-lib.js';
import { whenError } from './games/brain-gcd-lib.js';

   console.log('Welcome to the Brain Games!');

    export let userName = readlineSync.question('May I have your name? ');
    console.log('Hello ' + userName + '!');
    
    console.log(greetings);

    const getAnswer = () => readlineSync.question('Your answer: ');
 
    function runGame(generatParams, generatQuestion, calcAnswer) {
    
    let rightAnswer = 0;

    while(rightAnswer < 3){

      let params = generatParams();

      let question = generatQuestion(params);

      console.log('Question: ', question);

      let userAnswer = getAnswer();
    
      let expectAnswer = calcAnswer(params);

      if (userAnswer === expectAnswer.toString()){
        rightAnswer += 1;
        console.log('Correct!');
      } else {
        rightAnswer = 0;
        console.log(`${'"'}${userAnswer}${'"'}${' is wrong answer ;(. Correct answer was '}${'"'}${expectAnswer}${'"'}`);
        console.log(whenError);  
      }
      
    } 
     console.log('Congratulations, ' + userName + '!');
    };
    export default runGame;
   