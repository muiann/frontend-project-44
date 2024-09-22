import readlineSync from 'readline-sync';

// Wait for user's response.
 const getUserName = (userName) => {
  var userName = readlineSync.question('May I have your name? ');
  console.log('Hello ' + userName + '!');
}

export default getUserName;