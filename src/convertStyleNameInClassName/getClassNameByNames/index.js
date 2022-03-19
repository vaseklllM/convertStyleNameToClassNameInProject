const {convertStyleNameToClassName, convertRequestStyleName} = require('./convertStyleNameToClassName')

module.exports = function getClassNameByNames(names) {

  const classes = names
    .filter(i => i.type === 'styleName')
    .map(name => convertName(name.content))
    .join(', ')


  if (names.length === 1) {
    return `{${classes}}`
  } else if (names.length > 1) {
    return `{join([${classes}])}`
  }
  throw new Error('Неправильный массив атрибутов')
}


function convertName(name) {
  const isRequest = name.match(/\?([^<]+)\:/)

  if (isRequest) {
    return convertRequestStyleName(name)
  } else if (["&&", "||"].some(i => name.includes(i))) {
    return convertTxtJoinName(name)
  } else if (['\'', '\"'].some(i => name.includes(i))) {
    return convertStyleNameToClassName(name.replaceAll(/("|')/g, ''))
  }

  return convertStyleNameToClassName(name)
}

function convertTxtJoinName(name) {
  const symbol = name.at(-1)
  const {className, index} = getNameInfoFromTxtJoin(name, symbol)

  const left = name.substring(0, index)

  return left + convertStyleNameToClassName(className)
}

function getNameInfoFromTxtJoin(name, symbol) {
  const nameArr = name.split('')
  const reverseName = nameArr.reverse()
  reverseName.shift()

  const nameLength = reverseName.findIndex(i => i === symbol)

  let left = name.substring(0, name.length - nameLength - 2)
  const fullClassName = name.substring(left.length, name.length).trim()
  const className = fullClassName.substring(1, fullClassName.length - 1).trim()


  return {
    className, index: left.length,
  }
}
