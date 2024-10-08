//const arrActions = ['+', '*', '-'];

//const getRandomAction = () => Math.floor(Math.random()*arrActions.length);

export const generatParams = () => Math.floor(Math.random()* (100-1)+1); 

export const calcAnswer = (params) => {
    if (params % 2 === 0){
        return 'yes';
    }   else{
      return 'no';
  };
 }

 export const generatQuestion = (params) =>{    
    
    return params;

    }

export let greetings = 'Answer "yes" if the number is even, otherwise answer "no".';