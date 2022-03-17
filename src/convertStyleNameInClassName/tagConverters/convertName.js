const config = require("../config");

module.exports = function convertName(name) {
  if (name.includes('\'') || name.includes('"')) {
    return convertTxtJoinName(name)
  }

  if (name.includes('-')) {
    return `${config.CLASSES_NAME}["${name}"]`
  }

  return `${config.CLASSES_NAME}.${name}`
}

function convertTxtJoinName(name) {
  const symbol = name.at(-1)
  // const regex = new RegExp(`${symbol}([^<]+)${symbol}`, 'g');
  // const classNamesObj = [...name.matchAll(regex)].at(-1)
  // const className = classNamesObj[1].trim()

  const {className, index} = getNameInfoFromTxtJoin(name, symbol)

  // console.log(className, classNamesObj)

  // console.log(className)

  const left = name.substring(0, index)
  const newName = `${config.CLASSES_NAME}.${className}`

  return left + newName
}

function getNameInfoFromTxtJoin(name, symbol) {
  const nameArr = name.split('')
  const reverseName = nameArr.reverse()
  reverseName.shift()

  const nameLength = reverseName.findIndex(i => i === symbol)

  let left = name.substring(0, name.length - nameLength - 2)
  const fullClassName = name.substring(left.length, name.length).trim()
  const className = fullClassName.substring(1, fullClassName.length - 1).trim()

  // console.log(left.length)


  return {
    className,
    index: left.length,

  }
}