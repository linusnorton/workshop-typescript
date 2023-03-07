
// TypeScript will enforce additional restrictions on JavaScript using type information

// Variables

let myString: string = 'fish';
myString = 42;

let myInt: number = 7;
myInt = '42';

let myBool: boolean = false;
myBool = 'true';

let myNull: undefined = null;
let myUndefined: null = undefined;


























// Functions

function getMyPi(x: number): number {
  return x * 3.14; // good enough right?
}

const eatMyPi = (): void => {
  console.log('Nom nom nom');
}































// Narrowing

function findMyPi(maybePi: unknown) {
  maybePi.substring(0);
  const isItBool: boolean = maybePi;

  if (typeof maybePi === 'string') {
    maybePi.substring(0);
  } else if (maybePi === true) {
    const myBool: boolean = maybePi;

    console.log('myBool is a pi!', myBool);
  } else if (typeof maybePi === 'number') {
    console.log('I found the pi!');
  } else {
    console.log('I can\'t find the pi');
  }
}

function anythingGoes(maybePi: any) {
  maybePi.substring(0);
  const isItBool: boolean = maybePi;
}

function iDontEvenNeedToKnow(muh: never) {
  console.log(muh);
}

