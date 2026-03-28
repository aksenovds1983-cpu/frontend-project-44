#!/usr/bin/env node

import readlineSync from 'readline-sync';

const ROUNDS_TO_WIN = 3;

const runGame = (gameRules, generateRound) => {
  console.log('Welcome to the Brain Games!');
  
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  
  console.log(gameRules);
  
  let correctAnswers = 0;
  
  while (correctAnswers < ROUNDS_TO_WIN) {
    const { question, correctAnswer } = generateRound();
    
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return; 
    }
  }
  
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
