import mendy1 from './audio/mendy-1.ogg';
import mendy2 from './audio/mendy-2.mp3';
import mendy3 from './audio/mendy-3.ogg';
import mendy4 from './audio/mendy-4.ogg';
import mendy5 from './audio/mendy-5.mp3';
import mendy6 from './audio/mendy-7.mp3';
import mendy7 from './audio/mendy-8.mp3';

import stav1 from './audio/stav-1.mp3';
import stav2 from './audio/stav-2.mp3';
import stav3 from './audio/stav-3.mp3';
import stav4 from './audio/stav-4.mp3';

/* Import Backgrounds */

import cdGreen from './images/cd-green.svg';
import cdWhite from './images/cd-white.svg';

const backgrounds = [cdGreen, cdWhite]

const randomChoice = arr => {
  const randIndex = Math.floor(Math.random() * arr.length)
  return arr[randIndex]
}

const People = [{
    "name": "Yerrrrrt",
    "credit": "Mendy1011",
    "file": mendy1,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "Yerrr",
    "credit": "Mendy1011",
    "file": mendy2,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "Yerr Yerr Yerrrrr",
    "credit": "Mendy1011",
    "file": mendy3,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "Yerrrrrr",
    "credit": "Mendy1011",
    "file": mendy4,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "Yer Yer",
    "credit": "Mendy1011",
    "file": mendy5,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "Daddy Chill Yerrr",
    "credit": "Mendy1011",
    "file": mendy6,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "Skrt Skrt Yer Yer",
    "credit": "Mendy1011",
    "file": mendy7,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "Yerrrrrr",
    "credit": "StavieClixx",
    "file": stav1,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "How much could a Yerr chuck?",
    "credit": "StavieClixx",
    "file": stav2,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "Yerrliday",
    "credit": "StavieClixx",
    "file": stav3,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "Stern Yerr",
    "credit": "StavieClixx",
    "file": stav4,
    "background" : randomChoice(backgrounds)
  }
]

export default People;