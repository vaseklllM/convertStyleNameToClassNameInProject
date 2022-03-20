const getClassNameByNames = require('../getClassNameByNames')

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


  const defAttributeInfo = tag.match(/className=("|'|\{)([^<]+)("|'|\})/)

  if (defAttributeInfo) {
    const namesLength = defAttributeInfo[2].length


    const left = tag.substring(0, defAttributeInfo.index + 10)
    const right = tag.substring(defAttributeInfo.index + 10 + namesLength + 2, tag.length)

    if (['&&', "||", '?', ":"].some(i => defAttributeInfo[2].includes(i))) {
      const className = getClassNameByNames(
        [{
          content: defAttributeInfo[2],
          type: 'styleName'
        }])

      return `${left}${className}${right}`
    } else {
      const names = defAttributeInfo[2].trim().split(' ')
      const className = getClassNameByNames(names.map(name => ({content: name, type: 'styleName'})))
      return `${left}${className}${right}`
    }
  }


  return tag
}




