'use strict';

const parseEquation = (a, b, c) => {
  let partOne = '',
  partTwo = '',
  partThree = '';

  if (a < 0) {
    partOne = '-';
    if ((-a / 1) !== 1)
      partOne += (-a).toString();
  } else if ((a / 1) !== 1)
    partOne = a.toString();
  partOne += 'x^2';

  if (b !== 0) {
    if (b < 0) {
      partTwo = ' - ';
      if ((-b / 1) !== 1)
        partTwo += (-b).toString();
    } else {
      partTwo = ' + ';
      if ((b / 1) !== 1)
        partTwo += b.toString();
    }
    partTwo += 'x';
  }

  if (c !== 0) {
    if (c < 0)
      partThree = ' - ' + (-c).toString();
    else {
      partThree = ' + ' + c.toString();
    }
  }

  return partOne + partTwo + partThree + ' = 0';
};

const getDisc = (a, b, c) => (b * b) - (4 * a * c);

const calculate = (a, b, c) => {
  const answer = {},
  d = getDisc(a, b, c);

  if (d > 0) {
    answer.xOne = (-b + Math.sqrt(d)) / (2 * a);
    answer.xTwo = (-b - Math.sqrt(d)) / (2 * a);
  } else if (d === 0) answer.xOne = -b / (2 * a);

  return answer;
};

export { parseEquation, getDisc, calculate };