
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
let userName = readlineSync.question('May I have your name?');
const getUserName = () => {

  console.log('Hello, ' + userName + '!');
};
export default getUserName;