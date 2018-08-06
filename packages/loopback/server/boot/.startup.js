module.exports = async function(app) {

  console.log( 'boot.startup: running' )
  // Update mongodb index as defined in models
  await app.datasources.db.autoupdate().catch( console.log )

  // Promisify
  const bluebird = require('bluebird')
  Object.values(app.models).map( model => {
    bluebird.promisifyAll(model, {suffix: "P"})
  } )

  // Logger initialize
  global.Models = app.models
  // global.Logger = require('../core/logger')

  // Array extension
  // require('../core/extension')

}
