
// Objects
const myObj: { [key: string]: string } = {
  name: 'Bob',
  age: '42'
};

const myObject2: object = {
  name: 'Bob',
  age: '42'
}

type Obj = {
  name: string;
  age: string;
}

interface Obj2 {
  name: string;
  age: string;
}

const myObj3: Obj = {
  name: 'Bob',
  age: '42',
  size: 'large'
}

const myObj4: Obj2 = {
  name: 'Bob',
  age: '42',
  size: 'large'
}

const myObj5: { [key: string]: string } = {
  name: 'Bob',
  age: '42',
  size: 'large'
};

const myObj6: Record<string, string> = {
  name: 'Bob',
  age: '42',
  size: 'large'
};

const createObject: Function = (name: string) => {
  return { name, age: '42' };
}

const createObject2: (name: string) => Obj = (name: string) => {
  return { name, age: '42' };
}

// aliases are your friend

type Creator = (name: string) => Obj;

const createObject3: Creator = name => {
  return { name, age: '42' };
}






















// Arrays

const myArr: number[] = [1, 2, 3, 4, 5];
const myArr2: Array<number> = [1, 2, 3, 4, 5];
const myArr3: Obj[] = [];
const myArr4 = [];

const i = myArr4[0];
myArr4.push(1);
const j = myArr4[0];


























// Generics

const response: Promise<Obj> = http<Obj>('htps://api.com/endpoint');

async function http<T>(url: string): Promise<T> {
  return new Promise<T>(resolve => {
    resolve({ name: 'Bob', age: '42' } as T)
  });
}

type SafeUrl = `https://${string}`;


function getName(obj: Obj): string {
  return obj.name;
}

const bobsName2 = getName({ name: 'Bob', age: '42', something: 'else' });


function getNameGeneric<T extends Obj>(obj: T): string {
  return obj.name;
}

const bobsName = getNameGeneric({ name: 'Bob', age: '42', something: 'else' });










// String templates

async function httpSafe<T>(url: SafeUrl): Promise<T> {
  return new Promise<T>(resolve => {
    resolve({ name: 'Bob', age: '42' } as T)
  });
}

const response2: Promise<Obj> = httpSafe<Obj>('htps://api.com/endpoint');

