
interface Chicken {
  talk: () => void;
  eggProduction: number;
  legs: number;
  name?: string;
}

const namelessChicken: Chicken = {
  talk: () => console.log('Give me a name. Bahgurk!'),
  legs: 2,
  eggProduction: 5
}

interface Pig {
  talk: () => void;
  baconQuantity: number;
  name: string | undefined;
}

const namelessPig: Pig = {
  talk: () => console.log('Bahgurk!'),
  baconQuantity: 5
}





















function talkAnimal(animal: Chicken | Pig) {
  animal.talk();

  // type narrowing works, but typeof won't work
  if ('eggProduction' in animal) {
    console.log(`I have ${animal.eggProduction} eggs!`);
    console.log(`I have ${animal.legs} legs!`);
  } else {
    console.log(`I have ${animal.baconQuantity} bacon!`);
  }
}

interface GuineaPig {
  gender: 'M' | 'F' | 'X';
  name?: string;
}

const jeremy: GuineaPig = {
  gender: 'Male',
  name: 'Jeremy'
};

function createFrankenAnimal(): Chicken & Pig & GuineaPig {
  return {
    talk: () => console.log('I am a chicken guinea pig pig!'),
    eggProduction: 5,
    baconQuantity: 5,
    legs: 2,
    gender: 'X',
    name: 'Frank'
  }
}












const animals: (Chicken | Pig)[] = [namelessChicken, namelessPig];

interface Animal {
  talk: () => void;
  name?: string;
}

interface AnotherChicken extends Animal {
  eggProduction: number;
}

interface AnotherPig extends Animal {
  baconQuantity: number;
}

type YetAnotherChicken = Animal & {
  eggProduction: number;
}

type YetAnotherPig = Animal & {
  baconQuantity: number;
}
