/* eslint linebreak-style: "off" */
/* eslint eol-last: "off" */

import { getRandomNumber } from '../random.js';
import run from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRange = -100;
const maxRange = 100;

const isPrime = (number) => {
  const checkLimit = Math.sqrt(number);
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= checkLimit; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const number = getRandomNumber(minRange, maxRange);
  const question = String(number);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runPrime = () => {
  run(description, generateRound);
};

export default runPrime;