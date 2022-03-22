const getClassNameByNames = require('../getClassNameByNames')
const getTagArgumentInfo = require("../../utils/getTagArgumentInfo");

module.exports = function convertAttributeValue(tag) {
  /** txt.join */
  const txtJoinAttributeInfo = tag.match(/className={txt.join\(\[([^<]+)\]\)}/)

  if (txtJoinAttributeInfo) {
    const classNameInfo = getTagArgumentInfo({tag, argument: 'className'})
    const tagContent = classNameInfo.content.substring(10, classNameInfo.content.length - 2)
    const names = tagContent.split(',').map(i => i.trim()).filter(i => i)

    const className = getClassNameByNames(names.map(name => ({content: name, type: 'styleName'})))

    return tag.replace(classNameInfo.body, `className=${className}`)
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




