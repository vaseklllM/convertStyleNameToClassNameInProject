const getTagArgumentInfo = require('../../utils/getTagArgumentInfo')

module.exports = function convertHybridStyleNameAndClassName({tag, index, size, content}) {
  const styleNameInfo = getTagArgumentInfo({tag, argument: 'styleName'})

  console.log(styleNameInfo)


  // console.log(tag)

  // console.log({tag, index, size})

  return content
}