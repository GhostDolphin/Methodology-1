'use strict';

import { getInteractive } from './interactive.js';
import { getUninteractive } from './uninteractive.js';
import { getDisc, calculate } from './calc.js';

// Check which mode is to be utilised and retrieve corresponding values
const values = (process.argv.length < 3) ? getInteractive() : getUninteractive();