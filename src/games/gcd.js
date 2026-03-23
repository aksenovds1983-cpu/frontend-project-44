// src/games/gcd.js
import runGame from '../index.js';

const findGCD = (a, b) => {
  let num1 = Math.abs(a);
  let num2 = Math.abs(b);
  
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  
  return num1;
};

const generateRound = () => {
  const num1 = Math.floor(Math.random() * 50) + 1;
  const num2 = Math.floor(Math.random() * 50) + 1;
  
  const question = `${num1} ${num2}`;
  
  const correctAnswer = findGCD(num1, num2).toString();
  
  return { question, correctAnswer };
};

const gameRules = 'Find the greatest common divisor of given numbers.';

const playGCDGame = () => {
  runGame(gameRules, generateRound);
};

export default playGCDGame;