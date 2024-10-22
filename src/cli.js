
const readlineSync = require('readline-sync');

const getUserName = () => {

 let userName = readlineSync.question('May I have your name? ');
  console.log('Hello ' + userName + '!');
};
export default getUserName;