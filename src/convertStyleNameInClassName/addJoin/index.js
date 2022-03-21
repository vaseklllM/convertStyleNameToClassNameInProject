const removeImportUtilsTxt = require('./removeImportUtilsTxt')
const getLineInfoByIndex = require("../../utils/getLineInfoByIndex");


module.exports = function addJoin(content) {
  const isJoinUsages = content.search(/join\(\[/) !== -1
  const isImportJoin = content.search(/import join from "@\/utils\/join"/) !== -1

  console.log(isImportJoin, isJoinUsages)

  if (!isJoinUsages || isImportJoin) return content

  let newContent = content

  newContent = connectJoinToContent(content)

  const isUsagesUtilsTxt = newContent.search(/txt\./) !== -1

  if (!isUsagesUtilsTxt) {
    newContent = removeImportUtilsTxt(newContent)
  }


  return newContent
}

function connectJoinToContent(content) {
  const index = getImportIndex(content)
  const left = content.substring(0, index)
  const right = content.substring(index, content.length)


  const center = '\r\nimport join from "@/utils/join"'

  return `${left}${center}${right}`
}

function getImportIndex(content) {
  const lastImport = [...content.matchAll(/import/g)]
    .map(i => ({index: i.index}))
    .at(-1)

  const lineInfo = getLineInfoByIndex({content, index: lastImport.index})

  return lineInfo.endIndex
}