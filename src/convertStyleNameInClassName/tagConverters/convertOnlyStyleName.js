const convertAttributeValue = require('./convertAttributeValue')

module.exports = function convertOnlyStyleName({tag, index, size, content}) {

  let newTag = tag

  newTag = convertAttributeName(newTag)
  newTag = convertAttributeValue(newTag)


  const left = content.substring(0, index)
  const right = content.substring(index + size, content.length)


  return `${left}${newTag}${right}`
}


function convertAttributeName(tag) {
  return tag.replace(/styleName/, 'className')
}
