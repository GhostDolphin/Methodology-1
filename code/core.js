'use strict';

import { getInteractive } from './interactive.js';
import { getUninteractive } from './uninteractive.js';
import { parseEquation, getDisc, calculate } from './calc.js';

// Check which mode is to be utilised and retrieve corresponding values
const values = (process.argv.length < 3) ? getInteractive() : getUninteractive();

console.log(`Your equation is: ${parseEquation(...values)}\n`);

const disc = getDisc(...values);
console.log(`Discriminant equalts to ${disc}\n`);

if (disc < 0) {
  console.log('Equation has zero roots.');
  process.exit(0);
} else {
  const solution = calculate(...values);
  if (disc > 0)
    console.log(`x1 = ${solution.xOne};\nx2 = ${solution.xTwo}`);
  else if (disc === 0)
    console.log(`x1 = ${solution.xOne}`);
  process.exit(0);
}