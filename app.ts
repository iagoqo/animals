interface Animal {
  animal_name: string;
  hair: number;
  feathers: number;
  eggs: number;
  milk: number;
  airborne: number;
  aquatic: number;
  predator: number;
  toothed: number;
  backbone: number;
  breathes: number;
  venomous: number;
  fins: number;
  legs: number;
  tail: number;
  domestic: number;
  catsize: number;
  class_type: number;
}

const animals: Animal[] = require("./animals.json");

// 1. How many animals have hair?
const withHair = animals.filter(({ hair }) => !!hair).length;
console.log("1. How many animals have hair?", withHair);

// 2. List the names of the aquatic animals
const aquaticAnimalNames = animals
  .filter(({ aquatic }) => !!aquatic)
  .map(({ animal_name }) => animal_name);
console.log("2. List the names of the aquatic animals", aquaticAnimalNames);

// 3. What is the average number of times the letter "a" appears in the names of aquatic animals?
const letterCountList = aquaticAnimalNames.map(
  (name) => name.match(/a/gi)?.length || 0
);
const letterAverage =
  letterCountList.reduce((acc, count) => acc + count, 0) /
  letterCountList.length;
console.log(
  '3. What is the average number of times the letter "a" appears in the names of aquatic animals?',
  letterAverage
);

// 4. What is the type of the data in animals.json?
console.log(
  "4. What is the type of the data in animals.json?",
  `
The word "type" could have multiple interpretations so I'll give a long answer.

animals.json is a JSON file with an array of objects. These objects all have the same properties so I created an interface to represent them, called Animal:

interface Animal {
  animal_name: string;
  hair: number;
  feathers: number;
  eggs: number;
  milk: number;
  airborne: number;
  aquatic: number;
  predator: number;
  toothed: number;
  backbone: number;
  breathes: number;
  venomous: number;
  fins: number;
  legs: number;
  tail: number;
  domestic: number;
  catsize: number;
  class_type: number;
}
`
);

// 5. Which of the answers below is not correct and why is it not correct?
const mentionedAnimals = [
  "alligator",
  "anchovy",
  "barracuda",
  "crocodile",
  "dart frog",
  "firebelly",
  "flounder",
  "gharial",
  "halibut",
  "jellyfish",
  "mackerel",
  "marlin",
  "salamander",
  "scallop",
  "siren",
  "squid",
  "tree frog",
  "trout",
  "wart toad",
];
const missingAnimals = aquaticAnimalNames.filter(
  (name) => !mentionedAnimals.find((mentioned) => mentioned === name)
);

console.log(
  "5. Which of the answers below is not correct and why is it not correct?",
  "2 is not correct because it's missing:",
  missingAnimals
);
