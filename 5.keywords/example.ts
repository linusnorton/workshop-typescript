
interface Character {
  name: string;
  skill: string;
}

const peterParker = {
  name: 'Peter Parker',
}

function sayName(character: Character) {
  console.log(`${character.name} the ${character.skill} master`);
}

sayName(peterParker as Character);

const spider = {
  size: 'large',
}

sayName(spider as Character);

// with great power comes great responsibility
sayName(spider as unknown as Character);























// type guards

const characters: (Character | string)[] = [
  { name: 'Peter Parker', skill: 'Web 4.0' },
  'Uncle Ben',
  { name: 'Mysterio', skill: 'Illusions' },
  'J. Jonah Jameson',
]

const skilledCharacters = characters.filter((character): character is Character => {
  return typeof character !== 'string'
})




























// typeof

function shootWeb(character: typeof peterParker) {
  console.log(`${character.name} shoots a web`);
}







































// !!!!

interface Maybe {
  field?: string;
}

function output(maybe: Maybe) {
  validate(maybe);
  console.log(maybe.field!.substring(0));
}

function validate(maybe: Maybe) {
  if (!maybe.field) {
    throw new Error('field is required');
  }
}

function output2(maybe: Maybe) {
  validate(maybe);
  console.log(maybe.field?.substring(0));
}
