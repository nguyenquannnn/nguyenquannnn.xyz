const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      CONNECTION_URL:  "mongodb://localhost/27017"
    }
  }

  if (phase === PHASE_PRODUCTION_SERVER) {
    const USER = "Admin"
    const DB_NAME = "blogging"
    const DB_PASSWORD =  encodeURI(process.env.DB_PASSWORD)
    return {
      /* development only config options here */
      USER: USER,
      DB_NAME: DB_NAME,
      CONNECTION_URL:  `mongodb+srv://${USER}:${DB_PASSWORD}@cluster0.0foyz.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    }
  }

  return {
    /* config options for all phases here */
  }
}