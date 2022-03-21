const getTagArgumentInfo = require('../../utils/getTagArgumentInfo')
const removeArgumentFromTag = require('../../utils/removeArgumentFromTag')
const getClassNameParamsFromArgument = require('../../utils/getClassNameParamsFromArgument')
const getClassNameByNames = require('../getClassNameByNames')
const addArgumentToTag = require('../../utils/addArgumentToTag')
// const removeEmptyLinesFromTag = require('../../utils/removeEmptyLinesFromTag')

module.exports = function convertHybridStyleNameAndClassName({tag, index, size, content}) {
  const styleNameInfo = getTagArgumentInfo({tag, argument: 'styleName'})
  const classNameInfo = getTagArgumentInfo({tag, argument: 'className'})

  const styleNamesArr = getClassNameParamsFromArgument({content: styleNameInfo.content})
    .map(i => ({content: i, type: 'styleName'}))

  const classNamesArr = getClassNameParamsFromArgument({content: classNameInfo.content})
    .map(i => ({content: i, type: 'className'}))

  const className = getClassNameByNames([...classNamesArr, ...styleNamesArr])
  const newArgument = `className=${className}`

  let newTag = removeArgumentFromTag({tag, argument: 'styleName'})
  newTag = removeArgumentFromTag({tag: newTag, argument: 'className'})
  newTag = addArgumentToTag({tag: newTag, argument: newArgument})
  // newTag = removeEmptyLinesFromTag({tag: newTag})

  return content.replace(tag, newTag)
}