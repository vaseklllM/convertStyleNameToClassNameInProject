const getLineInfoByIndex = require('../utils/getLineInfoByIndex')

module.exports = function removeImportUtilsTxt(content) {
  const index = content.match(/txt/).index

  const lineInfo = getLineInfoByIndex({content, index})

  // console.log(index)

  return content
}