const fs = require('fs');
const getScssFilePaths = require('./getScssFilePaths')
const config = require('../config')

module.exports = function renameStyleScssFile({path, content}) {
  const isScss = content.search(/.scss/) !== -1

  if (!isScss) return

  const scssPathsInfo = getScssFilePaths({path, content}).filter(i => i.isNotAnother)
  const folderPath = getFolderPath(path)

  const scssPaths = scssPathsInfo.map(i => ({filePath: `${folderPath}\\${i.fileFullName}`, ...i}))
  const scssFilesContents = scssPaths.map((i) => {
    try {
      return {content: fs.readFileSync(i.filePath, 'utf8'), ...i}
    } catch (err) {
      console.error(err)
    }
  })

  scssFilesContents.map(async (i) => {
    try {
      const path = `${folderPath}\\${config.getScssFileName(i.fileName)}`
      fs.writeFileSync(path, i.content)
    } catch (err) {
      console.error(err)
    }
  })
}

function getFolderPath(path) {
  const folderPath = path.split('\\')
  folderPath.length--

  return folderPath.join('\\')
}