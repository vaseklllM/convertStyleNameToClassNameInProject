const fs = require('fs')


module.exports = function writeChanges({content, outputPath}) {

  try {
    fs.writeFileSync(outputPath, content)
  } catch (err) {
    console.log(err)
  }
}