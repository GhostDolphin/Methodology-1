'use strict';

import { parseEquation, getDisc, calculate } from './calc.js';

const solveExec = params => {
  console.log(`\nYour equation is: ${parseEquation(...params)}\n`);

  const disc = getDisc(...params);
  console.log(`Discriminant equalts to ${disc}\n`);

  if (disc < 0) {
    console.log('Equation has zero roots.');
    process.exit(0);
  } else {
    const solution = calculate(...params);
    if (disc > 0)
      console.log(`x1 = ${solution.xOne};\nx2 = ${solution.xTwo}`);
    else if (disc === 0)
      console.log(`x1 = ${solution.xOne}`);
    process.exit(0);
  }
};

//s
export { solveExec };