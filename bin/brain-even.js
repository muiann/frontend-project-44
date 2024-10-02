#!/usr/bin/env node

import readlineSync from 'readline-sync';

function runGame() {

console.log('Welcome to the Brain Games!');


let userName = readlineSync.question('May I have your name? ');
console.log('Hello ' + userName + '!');

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomNumber = () =>  Math.floor(Math.random()* (100-1)+1);

const getAnswer = () => readlineSync.question('Your answer: ');

const checkNumber = (number) => {

      if (number % 2 === 0){
          return 'yes';
      }   else{
        return 'no';
    };
};

let rightAnswer = 0;

while(rightAnswer < 3){

    let getNumber = getRandomNumber();

    console.log('Question: '+ getNumber);

    let userAnswer = getAnswer();
    
    let expectAnswer = checkNumber(getNumber);

    if (userAnswer === expectAnswer){
        rightAnswer += 1;
        console.log('Correct!');
    } else {
        rightAnswer = 0;
        console.log(`${'"'}${userAnswer}${'"'}${' is wrong answer ;(. Correct answer was '}${'"'}${expectAnswer}${'"'}`);
      }
      
} 
console.log('Congratulations, ' + userName + '!');



// const compareAnswer = (expectAnswer,userAnswer) => {
    
//     let rightAnswer = 0;
//     while(rightAnswer !== 3){

//      if (userAnswer === expectAnswer){
//        rightAnswer += 1;
//        console.log('Correct!');
//      } else {
//        console.log(userAnswer, + 'is wrong answer ;(. Correct answer was ' + expectAnswer);
//      }
//   } 
//     console.log('Congratulations, ' + userName + '!');
//   };
 

// compareAnswer();

// };
}
runGame();






//export default getUserName;