const config = require('../config')

module.exports = function convertOnlyStyleName({tag, index, size, content}) {

  const newTagWithAttributeName = convertAttributeName(tag)
  const newTagWithAttributeValue = convertAttributeValue(newTagWithAttributeName)

  // console.log(newTag)

  // console.log(content, tag)

  return content
}


function convertAttributeName(tag) {
  return tag.replace(/styleName/, 'className')
}

function convertAttributeValue(tag) {

  console.log(tag)

  return tag
}