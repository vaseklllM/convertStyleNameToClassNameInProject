const getTagArgumentInfo = require('../../utils/getTagArgumentInfo')
const removeArgumentFromTag = require('../../utils/removeArgumentFromTag')
const getClassNameParamsFromArgument = require('../../utils/getClassNameParamsFromArgument')

module.exports = function convertHybridStyleNameAndClassName({tag, index, size, content}) {
  const styleNameInfo = getTagArgumentInfo({tag, argument: 'styleName'})

  const styleNamesArr = getClassNameParamsFromArgument({content: styleNameInfo.content})

  console.log(styleNamesArr)

  // const left = content.substring(0, index)
  // const right = content.substring()

  // let newContent =
  let newTag = removeArgumentFromTag({tag, argument: 'styleName'})

  // console.log(styleNames)

  // const newContent = content.replace(tag, newTag)

  return content
}