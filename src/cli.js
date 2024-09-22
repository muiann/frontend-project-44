import readlineSync from 'readline-sync';

// Wait for user's response.
 const getUserName = (userName) => {
  userName = readlineSync.question('May I have your name? ');
  console.log('Hello ' + userName + '!');
}

export default getUserName;