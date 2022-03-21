const getTagArgumentInfo = require('../../utils/getTagArgumentInfo')
const removeArgumentFromTag = require('../../utils/removeArgumentFromTag')
const getClassNameParamsFromArgument = require('../../utils/getClassNameParamsFromArgument')
const getClassNameByNames = require('../getClassNameByNames')

module.exports = function convertHybridStyleNameAndClassName({tag, index, size, content}) {
  const styleNameInfo = getTagArgumentInfo({tag, argument: 'styleName'})
  const classNameInfo = getTagArgumentInfo({tag, argument: 'className'})

  const styleNamesArr = getClassNameParamsFromArgument({content: styleNameInfo.content})
    .map(i => ({content: i, type: 'styleName'}))

  const classNamesArr = getClassNameParamsFromArgument({content: classNameInfo.content})
    .map(i => ({content: i, type: 'className'}))

  const className = getClassNameByNames(styleNamesArr)

  let newTag = removeArgumentFromTag({tag, argument: 'styleName'})
  console.log(classNamesArr)

  // const left = content.substring(0, index)
  // const right = content.substring()


  // console.log(styleNames)

  // const newContent = content.replace(tag, newTag)

  return content
}