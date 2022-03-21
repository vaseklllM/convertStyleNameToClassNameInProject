const {
  convertStyleNameToClassName,
  convertRequestStyleName,
  convertTxtJoinName
} = require('./convertStyleNameToClassName')

module.exports = function getClassNameByNames(names) {
  // const classNames = names.filter(i => i.type === 'className')

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


