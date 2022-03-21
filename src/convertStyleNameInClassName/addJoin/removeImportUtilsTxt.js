const getLineInfoByIndex = require('../../utils/getLineInfoByIndex')
const removeLineByIndex = require('../../utils/removeLineByIndex')

module.exports = function removeImportUtilsTxt(content) {
  const index = content.match(/txt/)?.index

  if (!index) {
    return content
  }

  const lineInfo = getLineInfoByIndex({content, index})

  const modulesMatch = lineInfo.body.match(/\{([^<]+)\}/)
  const modulesLength = modulesMatch[0].length

  const modules = modulesMatch[1]
    .trim()
    .split(',')
    .filter(i => i)
    .map(i => i.trim())

  if (modules.length === 1) {
    return removeLineByIndex({content, index})
  }

  const left = content.substring(0, lineInfo.startIndex + modulesMatch.index)
  const right = content.substring(lineInfo.startIndex + modulesMatch.index + modulesLength)
  const center = `{ ${modules.filter(i => i !== 'txt').join(', ')} }`

  return `${left}${center}${right}`
}