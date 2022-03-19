const getLineInfoByIndex = require('../../utils/getLineInfoByIndex')
const removeLineByIndex = require('../../utils/removeLineByIndex')

module.exports = function removeImportUtilsTxt(content) {
  const index = content.match(/txt/).index

  const lineInfo = getLineInfoByIndex({content, index})

  const modules = lineInfo.body.match(/\{([^<]+)\}/)[1]
    .trim()
    .split(',')
    .filter(i => i)

  if (modules.length === 1) {
    return removeLineByIndex({content, index})
  }

  console.log(modules)

  return content
}