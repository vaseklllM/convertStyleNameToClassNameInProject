const fs = require('fs')

module.exports = function writeContent({path, content}) {
  try {
    const folderPath = getFolderPath(path)

    if (!fs.existsSync(folderPath)){
      fs.mkdirSync(folderPath);
    }

    fs.writeFileSync(path, content)

  } catch (err) {
    console.log(err)
  }
}

function getFolderPath(path) {
  let folderPath = path.split('\\')
  folderPath.length--
  return folderPath.join('\\')
}