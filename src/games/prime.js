// src/games/prime.js
import runGame from '../index.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
};

const generateRound = () => {
  const number = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
  
  const question = number.toString();
  
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  
  return { question, correctAnswer };
};

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playPrimeGame = () => {
  runGame(gameRules, generateRound);
};

export default playPrimeGame;