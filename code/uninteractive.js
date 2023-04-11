'use strict';

import { existsSync, readFileSync } from 'fs';

// Get values from the uninteractive mode
const getUninteractive = () => {
  const pathTo = process.argv[2];

  if (!existsSync(pathTo)) {
    console.log('File does not exist. Run command again.');
    process.exit(0);
  }

  const data = readFileSync(pathTo).toString();
  if (!(data.indexOf('\\n') > -1)) {
    console.log('Incorrect input file format. Try again.');
    process.exit(400);
  }

  const values = data.trim('\n').split(' ').map(item => parseFloat(item.toString()));

  if (values.length !== 3) {
    console.log('Incorrect input file format. Try again.');
    process.exit(400);
  } else if (values[0] === 0) {
    console.log('a cannot be equal to 0. Try again.');
    process.exit(400);
  } else {
    let error = false;
    for (const item of values) {
      if (isNaN(item)) error = true;
    }
    if (error) {
      console.log('All values must be numbers. Try again.');
      process.exit(400);
    }
  }

  return values;
};

export { getUninteractive };