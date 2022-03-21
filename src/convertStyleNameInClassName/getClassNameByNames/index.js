const {
  convertStyleNameToClassName,
  convertRequestStyleName,
  convertTxtJoinName
} = require('./convertStyleNameToClassName')

module.exports = function getClassNameByNames(names) {
  let classNames = names.filter(i => i.type === 'className').map(i => i.content)

  const styleNames = names
    .filter(i => i.type === 'styleName')
    .map(name => convertName(name.content))

  classNames = [...classNames, ...styleNames].join(', ')

  if (names.length === 1) {
    return `{${classNames}}`
  } else if (names.length > 1) {
    return `{join([${classNames}])}`
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


