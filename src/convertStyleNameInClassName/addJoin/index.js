const removeImportUtilsTxt = require('./removeImportUtilsTxt')


module.exports = function addJoin(content) {
  const isJoin = content.search(/join\(\[/) !== -1

  if (!isJoin) return content

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
    .map(i => ({index: i.index, length: i[0].length}))
    .at(-1)

  const right = content.substring(lastImport.index, content.length)
  const importLineLength = right.match(/\r\n/).index

  return lastImport.index + importLineLength
}