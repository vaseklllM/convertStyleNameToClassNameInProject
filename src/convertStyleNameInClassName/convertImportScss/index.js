const config = require("../config");
const getLineInfoByIndex = require('../../utils/getLineInfoByIndex')

module.exports = function convertImportScss(content) {
  const lineIndex = content.search(/\.\/([^<]+).scss/)
  const lineInfo = getLineInfoByIndex({index: lineIndex, content})
  const body = `import ${config.CLASSES_NAME} from "./${config.getScssFileName('style')}"`

  if (lineInfo.body.trim() === body) return content

  return content.replace(
    lineInfo.body,
    body
  )
}