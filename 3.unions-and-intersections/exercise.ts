
const redPill = {
  color: '#ff0000',
}

const bluePill = {
  color: '#0000ff',
}

function getPillFromMorpheus(color) {
  return color === '#ff0000' ? redPill : bluePill;
}

const pill = getPillFromMorpheus('#f00000');
