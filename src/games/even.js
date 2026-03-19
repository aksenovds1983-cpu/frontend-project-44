import runGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  
  const question = number.toString();
  
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  
  return { question, correctAnswer };
};

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEvenGame = () => {
  runGame(gameRules, generateRound);
};

export default playEvenGame;