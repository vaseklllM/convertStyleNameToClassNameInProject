
const convertAttributeValue = require('./convertAttributeValue')

module.exports = function convertOnlyStyleName({tag, index, size, content}) {

  const newTagWithAttributeName = convertAttributeName(tag)
  const newTagWithAttributeValue = convertAttributeValue(newTagWithAttributeName)

  console.log(newTagWithAttributeName, newTagWithAttributeValue)

  // console.log(content, tag)

  return content
}


function convertAttributeName(tag) {
  return tag.replace(/styleName/, 'className')
}
