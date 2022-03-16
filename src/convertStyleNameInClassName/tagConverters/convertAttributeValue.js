const convertName = require('./convertName')

module.exports = function convertAttributeValue(tag) {
  const defAttributeInfo = tag.match(/className=("|')([^<]+)("|')/)
  if (defAttributeInfo) {
    const namesLength = defAttributeInfo[2].length
    const names = defAttributeInfo[2].split(' ')


    const left = tag.substring(0, defAttributeInfo.index + 10)
    const right = tag.substring(defAttributeInfo.index + 10 + namesLength + 2, tag.length)


    if (names.length === 1) {
      return `${left}{${convertName(names[0])}}${right}`
    } else if (names.length > 1) {
      const canter = names.map(name => convertName(name))
      return `${left}{join([${canter.join(', ')}])}${right}`
    }

    return tag
  }

  // const objAttributeInfo = tag.match(/className={txt.join\(\[([^<]+)\]\)}/)
  // if (objAttributeInfo) {
  //   // const namesLength = objAttributeInfo[2].length
  //   // const names = objAttributeInfo[2].split(' ')
  //
  //   //
  //   // const left = tag.substring(0, objAttributeInfo.index + 10)
  //   // const right = tag.substring(objAttributeInfo.index + 10 + namesLength + 2, tag.length)
  //
  //   console.log(objAttributeInfo)
  // }


  return tag
}


