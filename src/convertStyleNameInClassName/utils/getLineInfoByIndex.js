module.exports = function getLineInfoByIndex({content, index}) {
  const left = content.substring(0, index)
  const right = content.substring(index, content.length)

  const startIndex = [...left.matchAll(/\n/g)].at(-1).index + 1
  const endIndex = right.match(/\r/).index + index
  const body = content.substring(startIndex, endIndex)
  const length = body.length


  return {
    startIndex,
    endIndex,
    length,
    body
  }
}