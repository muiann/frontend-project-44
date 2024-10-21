import { userName } from "../index.js";

export const generatParams = () => {
    let result = [];
    const getRandomNumber = () =>  Math.floor(Math.random()* (100-1)+1);

      let onceNumber = getRandomNumber();
      let step = getRandomNumber();
     
      while (result.length < 10) {

        let newNumber = onceNumber + step;
        result.push(newNumber);
        onceNumber = newNumber;
      }
      let randomValue = (Math.floor(Math.random(result.length) * (10 - 1) + 1));
      result[randomValue] = '..';

    return result;
}

export const calcAnswer = (params) => {

  for (let i = 0; i < params.length; i++){
    let prevNumber = params [i];
    let prevPrevNumber = params [i + 1];
    let step = prevPrevNumber - prevNumber;

    for (const value of params){

      let prev = -1;
      if (value === '..'){
         break;
      }
      prev = value;
      prevNumber = prev;
      
    
    }
    let randomNumber = prevNumber + step;
    return randomNumber;     
  }
  
};

export const generatQuestion = (params) =>{    
    
    return params.join(' ');
}

export let greetings = 'What number is missing in the progression?';

export let whenError = `${"Let's try again, "}${userName}${"!"}`;