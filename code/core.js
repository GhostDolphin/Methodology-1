'use strict';

import { getInteractive } from './interactive.js';
import { getUninteractive } from './uninteractive.js';
import { parseEquation, getDisc, calculate } from './calc.js';

if (process.argv.length < 3)
  getInteractive();
else
  getUninteractive();