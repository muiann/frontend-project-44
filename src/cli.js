
import readlineSync from 'readline-sync';
//console.log('Welcome to the Brain Games!');
let userName = readlineSync.question();
const getUserName = () => {

  console.log('Hello, ' + userName + '!');
};
export default getUserName;