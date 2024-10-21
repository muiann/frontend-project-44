#!/usr/bin/env node

import {generatParams, whenError} from '../src/games/brain-gcd-lib.js';
import {calcAnswer} from '../src/games/brain-gcd-lib.js';
import {generatQuestion} from '../src/games/brain-gcd-lib.js';
import {greetings} from '../src/games/brain-gcd-lib.js';

import runGame from '../src/index.js';

runGame(greetings, generatParams, generatQuestion, calcAnswer, whenError);