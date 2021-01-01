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
import stav5 from './audio/stav-5.mp3';

import zoe1 from './audio/zoe-1.mp3';

import evon from './audio/evon-1.mp3';

import swift1 from './audio/papaswift-1.mp3';

import jules1 from './audio/jules-1.mp3';
import jules2 from './audio/jules-2.mp3';
import jules3 from './audio/jules-3.mp3';
import jules4 from './audio/jules-4.mp3';
import jules5 from './audio/jules-5.mp3';
import jules6 from './audio/jules-6.mp3';
import jules7 from './audio/jules-7.mp3';
import jules8 from './audio/jules-7.mp3';

import danks1 from './audio/danks-1.mp3';
import danks2 from './audio/danks-2.mp3';
import danks3 from './audio/danks-3.mp3';
import danks4 from './audio/danks-4.mp3';

import krusty1 from './audio/krusty-1.mp3';

import scoot1 from './audio/scoot-1.mp3';

import farabeast1 from './audio/drfarabeast.mp3';

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
  },
  {
    "name": "And I dont want to miss a yerr.",
    "credit": "StavieClixx",
    "file": stav5,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "Harry Pottyerr",
    "credit": "H0bbitQueen",
    "file": zoe1,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "A yerrr",
    "credit": "evonmichL",
    "file": evon,
    "background" : randomChoice(backgrounds)
  }
  ,
  {
    "name": "Yerr yerrr",
    "credit": "PartyScientist",
    "file": jules1,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "YerrRRrr",
    "credit": "PartyScientist",
    "file": jules2,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "Yerrrr Yerr",
    "credit": "PartyScientist",
    "file": jules3,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "Yerr?",
    "credit": "PartyScientist",
    "file": jules4,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "YERR",
    "credit": "PartyScientist",
    "file": jules5,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "yer yer yerrr",
    "credit": "PartyScientist",
    "file": jules6,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "Yerrrrr",
    "credit": "PartyScientist",
    "file": jules7,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "Yerr The Night",
    "credit": "PartyScientist",
    "file": jules8,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "Happy New Yerrrr",
    "credit": "IHaveTheDanks",
    "file": danks1,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "yerrrrrrrrrrrr",
    "credit": "IHaveTheDanks",
    "file": danks2,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "Softest Yerr Ever",
    "credit": "IHaveTheDanks",
    "file": danks3,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "The Yerr Song",
    "credit": "IHaveTheDanks",
    "file": danks4,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "Yerrrrr Yerr Yerr Yerrrr",
    "credit": "KrustyBong",
    "file": krusty1,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "yerrrrr",
    "credit": "ScootMcGoo",
    "file": scoot1,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "Yerrr",
    "credit": "DrFarabeast",
    "file": farabeast1,
    "background" : randomChoice(backgrounds)
  },
  {
    "name": "Yerr Beautiful",
    "credit": "Papa Swift",
    "file": swift1,
    "background" : randomChoice(backgrounds)
  }
]

export default People;