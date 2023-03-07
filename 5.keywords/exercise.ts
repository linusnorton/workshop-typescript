
const devConfig = {
  name: 'dev',
  port: 3000,
  db: {
    host: 'localhost',
    port: 5432,
  }
}

const prodConfig = {
  name: 'prod',
  port: 80,
  db: {
    host: 'prod-db',
    port: 5432,
  }
}

function startApplication(config) {
  console.log(`Starting ${config.name} on port ${config.port}`)
}

function connectToDB(dbConfig) {
  console.log(`Connecting to ${dbConfig.host}:${dbConfig.port}`)
}
