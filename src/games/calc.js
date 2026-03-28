import runGame from '../index.js'

const operators = ['+', '-', '*']

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

const generateRound = () => {
  const num1 = Math.floor(Math.random() * 20) + 1
  const num2 = Math.floor(Math.random() * 20) + 1
  const operator = operators[Math.floor(Math.random() * operators.length)]

  const question = `${num1} ${operator} ${num2}`
  const correctAnswer = calculate(num1, num2, operator).toString()

  return { question, correctAnswer }
}

const gameRules = 'What is the result of the expression?'

const playCalcGame = () => {
  runGame(gameRules, generateRound)
}

export default playCalcGame
