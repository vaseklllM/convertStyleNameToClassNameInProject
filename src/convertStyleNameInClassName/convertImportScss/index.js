const config = require("../config");
const getLineInfoByIndex = require('../../utils/getLineInfoByIndex')

module.exports = function convertImportScss(content) {
  const lineIndex = content.search(/\.\/style\.scss/)

  const lineInfo = getLineInfoByIndex({index: lineIndex, content})
  console.log(lineInfo)


  return content.replace(
    /import ("|').\/style.scss("|')/,
    `import ${config.CLASSES_NAME} from "./${config.getScssFileName('style')}"`
  )
}