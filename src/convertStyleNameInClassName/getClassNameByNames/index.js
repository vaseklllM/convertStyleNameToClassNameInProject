const config = require("../config");

module.exports = function getClassNameByNames(names) {
  const body = names.map(name => convertName(name)).join(', ')

  if (names.length === 1) {
    return `{${body}}`
  } else if (names.length > 1) {
    return `{join([${body}])}`
  }
  throw new Error('Неправильный массив атрибутов')
}


function convertName(name) {
  if (name.includes('\'') || name.includes('"')) {
    return convertTxtJoinName(name)
  }

  return getName(name)
}

function convertTxtJoinName(name) {
  const symbol = name.at(-1)
  const {className, index} = getNameInfoFromTxtJoin(name, symbol)

  const left = name.substring(0, index)

  return left + getName(className)
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
    className,
    index: left.length,

  }
}

function getName(name) {
  if (name.includes('-')) {
    return `${config.CLASSES_NAME}["${name}"]`
  }

  return `${config.CLASSES_NAME}.${name}`
}