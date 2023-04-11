'use strict';

import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Get values from the interactive mode
const getInteractive = () => {
  let values = [];

  rl.setPrompt('Input a, b and c. Separate them with spaces (e.g. 1 2 3):');
  rl.prompt();

  rl.on('line', function(input) {
    const divInput = input.split(' ').map(item => parseFloat(item.toString()));

    if (divInput.length !== 3) {
      console.log('The quantity of numbers is incorrect. Try again.');
      rl.prompt();
    } else if (divInput[0] === 0) {
      console.log('a cannot be equal to 0. Try again.');
      rl.prompt();
    } else {
      let error = false;
      for (const item of divInput) {
        if (isNaN(item)) error = true;
      }
      if (error) {
        console.log('All values must be numbers. Try again.');
        rl.prompt();
      } else {
        values = divInput;
        rl.close();
      }
    }
  }).on('close', function() {
    console.log(`a = ${values[0]}; b = ${values[1]}; c = ${values[2]}`);
    process.exit(0);
  });

  return values;
};

export { getInteractive };