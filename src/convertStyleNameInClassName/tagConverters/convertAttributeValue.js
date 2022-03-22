const getClassNameByNames = require('../getClassNameByNames')
const getTagArgumentInfo = require("../../utils/getTagArgumentInfo");

module.exports = function convertAttributeValue(tag) {
  /** txt.join */
  const txtJoinAttributeInfo = tag.match(/className={txt.join\(\[([^<]+)\]\)}/)

  if (txtJoinAttributeInfo) {
    const namesLength = txtJoinAttributeInfo[1].length
    const names = txtJoinAttributeInfo[1].split(',').map(i => i.trim()).filter(i => i)

    const className = getClassNameByNames(names.map(name => ({content: name, type: 'styleName'})))

    const left = tag.substring(0, txtJoinAttributeInfo.index + 10)
    const right = tag.substring(txtJoinAttributeInfo.index + 24 + namesLength, tag.length)

    return `${left}${className}${right}`
  }


  const defAttributeInfo = tag.match(/className=("|'|\{)/)

  if (defAttributeInfo) {
    const classNameInfo = getTagArgumentInfo({tag, argument: 'className'})

    const left = tag.substring(0, classNameInfo.startIndex + 10)
    const right = tag.substring(classNameInfo.endIndex + 10 + 2, tag.length)


    if (['&&', "||", '?', ":"].some(i => classNameInfo.content.includes(i))) {
      const className = getClassNameByNames(
        [{
          content: classNameInfo.content,
          type: 'styleName'
        }])

      return `${left}${className}${right}`
    } else {
      const names = classNameInfo.content.trim().split(' ')
      const className = getClassNameByNames(names.map(name => ({content: name, type: 'styleName'})))

      return `${left}${className}${right}`
    }
  }


  return tag
}




