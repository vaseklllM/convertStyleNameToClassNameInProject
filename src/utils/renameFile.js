const fs = require('fs')

module.exports = async function renameFile({prevPath, newPath}) {

  try {
    fs.renameSync(prevPath, newPath)

    console.log(`--> ${newPath} ✓`)
  } catch (error) {
    console.log(error)
  }
}