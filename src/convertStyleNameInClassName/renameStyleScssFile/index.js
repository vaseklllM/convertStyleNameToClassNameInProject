const fs = require('fs');
const getScssFilePaths = require('./getScssFilePaths')

module.exports = function renameStyleScssFile({path, content}) {
  const isScss = content.search(/.scss/) !== -1

  if (!isScss) return

  const scssPaths = getScssFilePaths({path, content}).filter(i => i.isNotAnother)

  console.log(scssPaths)

  // const scssContent =


}