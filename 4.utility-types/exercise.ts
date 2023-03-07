
const teapots = {
  'goldenSakura': {
    id: 'goldenSakura',
    name: 'Golden Sakura',
    description: 'A beautiful golden teapot with a sakura design.',
  },
  'blackDragon': {
    id: 'blackDragon',
    name: 'Black Dragon',
    description: 'A black teapot with a dragon design.',
  },
  'whiteLotus': {
    id: 'whiteLotus',
    name: 'White Lotus',
    description: 'A white teapot used by a certain secret society.',
  }
}

function getTeaPot(id) {
  return teapots[id]
}

function findTeapot(searchParams) {
  return Object.values(teapots).find(teapot => {
    return Object.entries(searchParams).some(([key, value]) => {
      return teapot[key] === value
    })
  })
}
