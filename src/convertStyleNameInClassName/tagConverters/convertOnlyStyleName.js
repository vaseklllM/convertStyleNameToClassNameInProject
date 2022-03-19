const convertAttributeValue = require('./convertAttributeValue')

module.exports = function convertOnlyStyleName({tag, index, size, content}) {

  const newTagWithAttributeName = convertAttributeName(tag)
  const newTagWithAttributeValue = convertAttributeValue(newTagWithAttributeName)


  const left = content.substring(0, index)
  const right = content.substring(index + size, content.length)


  return `${left}${newTagWithAttributeValue}${right}`
}


function convertAttributeName(tag) {
  return tag.replace(/styleName/, 'className')
}
