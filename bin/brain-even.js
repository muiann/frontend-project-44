#!/usr/bin/env node

import {generatParams} from '../src/games/brain-even-lib.js';
import {calcAnswer} from '../src/games/brain-even-lib.js';
import {generatQuestion} from '../src/games/brain-even-lib.js';

import runGame from '../src/index.js';

runGame(generatParams, generatQuestion, calcAnswer);