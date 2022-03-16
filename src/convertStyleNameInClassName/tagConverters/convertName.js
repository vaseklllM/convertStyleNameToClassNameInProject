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
  const regex = new RegExp(`${symbol}([^<]+)${symbol}`, 'g');
  const classNamesObj = [...name.matchAll(regex)].at(-1)
  const className = classNamesObj[1].trim()

  console.log(className)

  const left = name.substring(0, classNamesObj.index)
  const newName = `${config.CLASSES_NAME}.${className}`

  return left + newName
}