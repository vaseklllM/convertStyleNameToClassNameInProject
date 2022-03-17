const fs = require('fs')

const testPath = 'project\\indexFixed.js'

module.exports = function writeChanges({path, content}) {

  try {
    fs.writeFileSync(testPath, content)
    //file written successfully
  } catch (err) {
    console.error(err)
  }
}