// const getLineInfoByIndex = require('./getLineInfoByIndex')
//
// module.exports = function removeEmptyLinesFromTag({tag}) {
//   // const noRN = tag.split('\r\n').map(i => i.trim()).join(' ')
//   // const noSpaces = tag.split(' ').filter(i => i)
//   // let newTag = noSpaces.join(' ')
//
//   const lineIndexes = [...tag.matchAll(/\r\n/g)]
//
//   for (let i = 0; i < lineIndexes.length; i++) {
//     console.log(lineIndexes[i].index)
//     console.log(tag)
//     // const lineInfo = getLineInfoByIndex({index: lineIndexes[i].index, content: tag})
//     // console.log(lineInfo)
//   }
//
//
//   // return noSpaces.join(' ')
//   return tag
// }