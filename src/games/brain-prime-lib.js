import { userName } from "../index.js";

export const generatParams = () => Math.floor(Math.random()* (100-1)+1);

export const calcAnswer = (params) => {
        if (params < 2) {
          return 'no';
        } 
        if (params === 2) {
          return 'yes';
        }

        let i = 2;
        const limit = Math.sqrt(params);
        while (i <= limit) {
          if (params % i === 0) {
            return 'no';
          }
          i +=1;
        }
        
        return 'yes'; 
}

 export const generatQuestion = (params) =>{    
    return params;
}

export let greetings = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export let whenError = `${"Let's try again, "}${userName}${"!"}`;