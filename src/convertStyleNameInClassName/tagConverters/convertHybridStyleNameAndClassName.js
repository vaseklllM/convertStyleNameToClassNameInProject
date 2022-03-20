const getTagArgumentInfo = require('../../utils/getTagArgumentInfo')

module.exports = function convertHybridStyleNameAndClassName({tag, index, size, content}) {
  const styleNameInfo = getTagArgumentInfo({tag, argument: 'styleName'})

  console.log(styleNameInfo)


  // console.log(tag)

  // console.log({tag, index, size})

  return content
}

// function getStyleNameInfo(tag) {
//   const startIndex = tag.search(/styleName=/)
//   const startContentIndex = startIndex + 10
//   const symbol = tag[startContentIndex]
//   const right = tag.substring(startContentIndex + 1, tag.length)
//   const endContentIndex = right.search(symbol)
//   const endIndex = endContentIndex + startContentIndex + 1
//   const content = tag.substring(startContentIndex + 1, endIndex)
//   const body = tag.substring(startIndex, endIndex + 1)
//
//   return {
//     body,
//     content,
//     startIndex,
//     endIndex,
//   }
// }