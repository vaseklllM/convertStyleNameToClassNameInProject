const fs = require('fs')

module.exports = function writeContent({path, content}) {
  try {
    const folderPath = getFolderPath(path)

    if (!fs.existsSync(folderPath)){
      fs.mkdirSync(folderPath, {recursive: true});
    }

    fs.writeFileSync(path, content)

    // console.log(`--> ${path} ✓`)
  } catch (err) {
    console.log(err)
  }
}

function getFolderPath(path) {
  let folderPath = path.split('\\')
  folderPath.length--
  return folderPath.join('\\')
}