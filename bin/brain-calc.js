#!/usr/bin/env node


import {generatParams} from '../src/games/brain-calc-lib.js';
import {calcAnswer} from '../src/games/brain-calc-lib.js';
import {generatQuestion} from '../src/games/brain-calc-lib.js';
import { greetings } from '../src/games/brain-calc-lib.js';
import { whenError } from '../src/games/brain-calc-lib.js';

import runGame from '../src/index.js'    
runGame(greetings,generatParams, generatQuestion, calcAnswer, whenError);