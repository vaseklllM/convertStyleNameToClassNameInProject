const convertName = require('./convertName')

module.exports = function convertAttributeValue(tag) {
  const attributeInfo = tag.match(/className=("|')([^<]+)("|')/)
  const namesLength = attributeInfo[2].length
  const names = attributeInfo[2].split(' ')


  const left = tag.substring(0, attributeInfo.index + 10)
  const right = tag.substring(attributeInfo.index + 10 + namesLength + 2, tag.length)


  if (names.length === 1) {
    return `${left}{${convertName(names[0])}}${right}`
  } else if (names.length > 1) {
    const canter = names.map(name => convertName(name))
    return `${left}{join([${canter.join(', ')}])}${right}`
  }

  return tag
}


