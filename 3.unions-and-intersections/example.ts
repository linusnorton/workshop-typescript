
interface Chicken {
  talk: () => void;
  eggProduction: number;
  name?: string;
}

const namelessChicken: Chicken = {
  talk: () => console.log('Give me a name. Bahgurk!'),
  eggProduction: 5
}

interface Pig {
  talk: () => void;
  baconQuantity: number;
  name: string | undefined;
}

const namelessPig: Pig = {
  talk: () => console.log('Bahgurk!'),
  eggProduction: 5
}





















function talkAnimal(animal: Chicken | Pig) {
  animal.talk();

  // type narrowing works, but typeof won't work
  if ('eggProduction' in animal) {
    console.log(`I have ${animal.eggProduction} eggs!`);
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
