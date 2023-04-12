'use strict';

import { getInteractive } from './interactive.js';
import { getUninteractive } from './uninteractive.js';

if (process.argv.length < 3)
  getInteractive();
else
  getUninteractive();