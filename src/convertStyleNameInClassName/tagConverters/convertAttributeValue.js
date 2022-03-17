const getClassNameByNames = require('../getClassNameByNames')

module.exports = function convertAttributeValue(tag) {
  const defAttributeInfo = tag.match(/className=("|')([^<]+)("|')/)

  if (defAttributeInfo) {
    const namesLength = defAttributeInfo[2].length
    const names = defAttributeInfo[2].trim().split(' ')

    const className = getClassNameByNames(names)

    const left = tag.substring(0, defAttributeInfo.index + 10)
    const right = tag.substring(defAttributeInfo.index + 10 + namesLength + 2, tag.length)

    return `${left}${className}${right}`
  }

  /** txt.join */
  const objAttributeInfo = tag.match(/className={txt.join\(\[([^<]+)\]\)}/)
  if (objAttributeInfo) {
    const namesLength = objAttributeInfo[1].length
    const names = objAttributeInfo[1].split(',').map(i => i.trim()).filter(i => i)

    const className = getClassNameByNames(names)

    const left = tag.substring(0, objAttributeInfo.index + 10)
    const right = tag.substring(objAttributeInfo.index + 24 + namesLength, tag.length)

    return `${left}${className}${right}`
  }

  return tag
}




