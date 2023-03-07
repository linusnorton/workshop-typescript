
type BeatleName = 'John' | 'Paul' | 'George' | 'Ringo';

interface Beatle {
  name: BeatleName;
  instrument: string;
  dateOfDeath?: Date;
}

// Record
const beatles: Record<string, Beatle> = {
  John: {
    name: 'John',
    instrument: 'guitar'
  },
  Raul: {
    name: 'Paul',
    instrument: 'bass'
  }
}

// Partial
const updateBeatleInDatabase = (beatle: Partial<Beatle>) => {
  if (beatle.name) {
    // update set ID = beatle.name
  } else {
    // update set instrument = beatle.instrument
  }
}

updateBeatleInDatabase({ name: 'John' });

const beatlesByName: Record<BeatleName, Beatle> = {
  John: {
    name: 'John',
    instrument: 'guitar'
  },
  Raul: {
    name: 'Paul',
    instrument: 'bass'
  }
}



// Required
const updateAllFields = (beatle: Required<Beatle>) => {
  console.log(beatle.dateOfDeath.getDate())
}

updateAllFields({
  name: 'Paul',
  instrument: 'bass'
})


// Pick
const updateSomeFields = (beatleId: BeatleName, updates: Partial<Pick<Beatle, 'instrument' | 'dateOfDeath'>>) => {
  // update set fields = updates where ID = beatleId
}

updateSomeFields('John', { instrument: 'guitar' })


const updateSomeFieldsWithRequiredName = (beatle: Partial<Beatle> & Pick<Beatle, 'name'>) => {
  beatle.name.toUpperCase();
  // update set fields = beatle where ID = beatle.name
}

updateSomeFieldsWithRequiredName({
  name: 'John',
  instrument: 'guitar'
})

// Rember type aliases are your friend
type PartialBeatleWithId = Partial<Beatle> & Pick<Beatle, 'name'>

const commitUpdate = (beatle: PartialBeatleWithId): Readonly<Beatle> => {
  // save and return full record
  return {
    name: beatle.name,
    instrument: 'guitar'
  }
}

const savedRecord = commitUpdate({
  name: 'John',
  instrument: 'piano'
})

savedRecord.instrument = 'guitar'


// There are many others!
