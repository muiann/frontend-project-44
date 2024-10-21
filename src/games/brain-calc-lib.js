import { userName } from "../index.js";

const arrActions = ['+', '*', '-'];

const getRandomAction = () => Math.floor(Math.random()*arrActions.length);

const getRandomNumber = () =>  Math.floor(Math.random()* (100-1)+1);

export const generatParams = () => {
    let result = [];
    let onceNumber = getRandomNumber();
    let secondNumber = getRandomNumber();
    let randomAction = getRandomAction();
    result.push(onceNumber,arrActions[randomAction],secondNumber);
    return result;
}

export const calcAnswer = (params) => {
    let onceNumber = params[0];
    let secondNumber = params[2];
    let randomAction = params[1];

   if (randomAction === '+'){
     return onceNumber + secondNumber;
  }   
   if (randomAction === '-'){
    return onceNumber - secondNumber;
  }
   if (randomAction === '*'){
    return onceNumber * secondNumber;
  }
 }

 export const generatQuestion = (params) =>{    
    
    return `${params[0]}${' '}${params[1]}${' '}${params[2]}`;

    }

export let greetings = 'What is the result of the expression?';

export let whenError = `${"Let's try again, "}${userName}${"!"}`;