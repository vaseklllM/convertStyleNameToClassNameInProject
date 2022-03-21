const fs = require('fs');
const getScssFilePaths = require('./getScssFilePaths')
const config = require('../config')
const writeContent = require('../writeContent')

module.exports = function renameStyleScssFile({path, content, outputPath}) {
  const isScss = content.search(/.scss/) !== -1

  if (!isScss) return

  const scssPathsInfo = getScssFilePaths({path, content}).filter(i => i.isNotAnother)
  const folderPath = getFolderPath(path)
  const folderOutputPath = getFolderPath(outputPath)

  const scssPaths = scssPathsInfo.map(i => ({filePath: `${folderPath}\\${i.fileFullName}`, ...i}))
  const scssFilesContents = scssPaths.map((i) => {
    try {
      return {content: fs.readFileSync(i.filePath, 'utf8'), ...i}
    } catch (err) {
      console.error(err)
    }
  })


  scssFilesContents.map(async (i) => {
    if (folderPath === folderOutputPath) {
      try {
        fs.unlinkSync(i.filePath)
      } catch (err) {
        console.error(err)
      }
    }

    writeContent({

      path: `${folderOutputPath}\\${config.getScssFileName(i.fileName)}`,
      content: i.content
    })
  })
}

function getFolderPath(path) {
  const folderPath = path.split('\\')
  folderPath.length--

  return folderPath.join('\\')
}