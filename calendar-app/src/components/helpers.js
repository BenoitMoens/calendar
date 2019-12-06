import React from 'react';
/**
 * 
 * Install moment js
 * Found this on Stackoverflow https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * Shuffles array in place. ES6 version
 * @param {Array} a - An array containing the items.
 */
const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const createHatches = () => {
  const hatchArray = new Array(24).fill(0).map((_, i) => ({
    id: `hatch-${i}`,
    nr: i + 1,
    img: `./img/${i + 1}.jpg`,
    text: `Just ${24 - i - 1} days left`,
    open: false
  }));
  return shuffle(hatchArray);
};

const shouldBeLocked = (today, dayConcerned) => { 
  if(dayConcerned > today) {
    return false
  } else {
    return true
  }
}

// Bad one-liners from https://onelinefun.com/christmas
export const hatchArray = [
  {
    id: "hatch-1",
    nr: 1,
    img: "./img/biere1.jpg",
    text:"DAY 1 = ... Astrid scroll ton chat !",
    open: false,
    isLocked: shouldBeLocked(new Date, 1),
  },
  {
    id: "hatch-2",
    nr: 2,
    img: "./img/biere234.jpg",
    text: "DAY 2 = ... Marouan, que la pinte soit avec toi !",
    open: false,
    isLocked: shouldBeLocked(new Date, 2),
  },
  {
    id: "hatch-3",
    nr: 3,
    img: "./img/biere3.jpg",
    text: "DAY 3 = ... Pierre, tu prendras bien une bière?",
    open: false
  },
  {
    id: "hatch-4",
    nr: 4,
    img: "./img/biere4.jpg",
    text: "DAY 4 = ... François, l'homme qui aphonne plus vite que son ombre!",
    open: false
  },
  {
    id: "hatch-5",
    nr: 5,
    img: "./img/biere5.jpg",
    text: "DAY 5 = ... Célestine, la Queen de la pintje !",
    open: false
  },
  {
    id: "hatch-6",
    nr: 6,
    img: "./img/biere6.jpg",
    text: "DAY 6 = ... Maxime, quoi? DES VACANCES ?! ",
    open: false
  },
  {
    id: "hatch-7",
    nr: 7,
    img: "./img/biere222.jpg",
    text: "DAY 7 = ... Dinu, bonjour, je m'appelle Dinu.",
    open: false
  },
  {
    id: "hatch-8",
    nr: 8,
    img: "./img/biere8.jpg",
    text: "DAY 8 = ... Nico, je m'excuse.",
    open: false
  },
  {
    id: "hatch-9",
    nr: 9,
    img: "./img/biere9.jpg",
    text:
      "Day 9 = ... Guislain, l'amoureux de Célestine. ",
    open: false
  },
  {
    id: "hatch-10",
    nr: 10,
    img: "./img/biere10.jpg",
    text: "Day 10 = ... Steeve, LA PIZZA DANS TON CUL!",
    open: false
  },
  {
    id: "hatch-11",
    nr: 11,
    img: "./img/biere11.jpg",
    text: "Day 11 = ... Pierre, LISEZ LA DOC DE REACT LES GARS!",
    open: false
  },
  {
    id: "hatch-12",
    nr: 12,
    img: "./img/biere12.jpg",
    text:
      "DAY 12 = ... Charles-Elie, la veste chauffante, après ta biere t'en a plus besoin !",
    open: false
  },
  {
    id: "hatch-13",
    nr: 13,
    img: "./img/biere13.jpg",
    text: "DAY 13 = ... Grégory, le futur marié qui va pas nous inviter, enculé.",
    open: false
  },
  {
    id: "hatch-14",
    nr: 14,
    img: "./img/biere14.jpg",
    text: "DAY 14 = ... William, bah je sais pas quoi dire sur moi-même, salut les enfoirés ! ",
    open: false
  },
  {
    id: "hatch-15",
    nr: 15,
    img: "./img/biere15.jpg",
    text: "DAY 15 = ... Sydney, les meilleures sont les plus courtes ( de blagues...)",
    open: false
  },
  {
    id: "hatch-16",
    nr: 16,
    img: "./img/biere16.jpg",
    text: "DAY 16 = ... Marine, pas de dérogation à la règle, prends ta bière ! ",
    open: false
  },
  {
    id: "hatch-17",
    nr: 17,
    img: "./img/biere17.jpg",
    text: "DAY 17 = ... Benoit, codeur mais surtout buveur! Joyeux Noel ! ",
    open: false
  },
  {
    id: "hatch-18",
    nr: 18,
    img: "./img/biere18.jpg",
    text: "DAY 18 = ... Robert, tu parles encore une fois de ma femme, JE T'ENCULE !",
    open: false
  },
  {
    id: "hatch-19",
    nr: 19,
    img: "./img/biere19.jpg",
    text: "DAY 19 =... Antoine, ouvre la case tu retrouveras ton humour! ",
    open: false
  },
  {
    id: "hatch-20",
    nr: 20,
    img: "./img/biere20.jpg",
    text: "DAY 20 = ... Merry christmas !",
    open: false
  },
  {
    id: "hatch-21",
    nr: 21,
    img: "./img/biere21.jpg",
    text:
      "DAY 21 = ... Think beer ! ",
    open: false
  },
  {
    id: "hatch-22",
    nr: 22,
    img: "./img/biere22.jpg",
    text: "DAY 22 = ... Javasbeer !",
    open: false
  },
  {
    id: "hatch-23",
    nr: 23,
    img: "./img/bierbiere.jpg",
    text: "Day 23 = ... Express cul sec",
    open: false
  },
  {
    id: "hatch-24",
    nr: 24,
    img: "./img/biere24.jpg",
    text: "DAY 24 = ... VIVE LA WILD !",
    open: false
  },
];

export const createCalendar = () => shuffle(hatchArray);
