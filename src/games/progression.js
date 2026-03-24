// src/games/progression.js
import runGame from '../index.js';

const MIN_LENGTH = 5;
const MAX_LENGTH = 10;
const MIN_START = 1;
const MAX_START = 20;
const MIN_STEP = 1;
const MAX_STEP = 10;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
};

const formatProgression = (progression, hiddenIndex) => {
  const formatted = progression.map((num, index) => 
    index === hiddenIndex ? '..' : num.toString()
  );
  return formatted.join(' ');
};

const generateRound = () => {

  const length = Math.floor(Math.random() * (MAX_LENGTH - MIN_LENGTH + 1)) + MIN_LENGTH;
  
  const start = Math.floor(Math.random() * (MAX_START - MIN_START + 1)) + MIN_START;
  const step = Math.floor(Math.random() * (MAX_STEP - MIN_STEP + 1)) + MIN_STEP;
  
  const progression = generateProgression(start, step, length);
  
  const hiddenIndex = Math.floor(Math.random() * length);
  
  const correctAnswer = progression[hiddenIndex].toString();
  
  const question = formatProgression(progression, hiddenIndex);
  
  return { question, correctAnswer };
};

const gameRules = 'What number is missing in the progression?';

const playProgressionGame = () => {
  runGame(gameRules, generateRound);
};

export default playProgressionGame;