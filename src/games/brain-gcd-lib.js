import { userName } from "../index.js";


export const generatParams = () => {
    let result = [];
    const getRandomNumber = () =>  Math.floor(Math.random()* (100-1)+1);

      let onceNumber = getRandomNumber();
      let secondNumber = getRandomNumber();
      result.push(onceNumber, secondNumber);

    return result;
}

export const calcAnswer = (params) => {
    let onceNumber = params[0];
    let secondNumber = params[1];
            //while (onceNumber !== secondNumber){
                if(secondNumber === 0){
                    return onceNumber;
                 }else{
                    return (secondNumber, onceNumber % secondNumber);
                }
             
};

 export const generatQuestion = (params) =>{    
    
    return `${params[0]}${' '}${params[1]}`;
}

export let greetings = 'Find the greatest common divisor of given numbers.';

export let whenError = `${"Let's try again, "}${userName}${"!"}`;