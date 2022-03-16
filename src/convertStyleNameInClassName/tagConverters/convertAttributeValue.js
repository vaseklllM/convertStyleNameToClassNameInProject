const config = require('../config')

module.exports = function convertAttributeValue(tag) {
  const attributeInfo = tag.match(/className=("|')([^<]+)("|')/)
  const namesLength = attributeInfo[2].length
  const names = attributeInfo[2].split(' ')


  if (names.length === 1) {
    const left = tag.substring(0, attributeInfo.index + 10)
    const right = tag.substring(attributeInfo.index + 10 + namesLength + 2, tag.length)
    return left + `{${config.CLASSES_NAME}.${names[0]}}` + right
  }


  return tag
}
