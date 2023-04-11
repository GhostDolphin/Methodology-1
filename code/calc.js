'use strict';

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

export { getDisc, calculate };