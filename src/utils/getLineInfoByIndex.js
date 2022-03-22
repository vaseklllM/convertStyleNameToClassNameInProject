module.exports = function getLineInfoByIndex({content, index}) {
  const left = content.substring(0, index)
  const right = content.substring(index, content.length)

  const startIndex = [...left.matchAll(/\n/g)].at(-1).index + 1
  const endIndex = getEndIndex(right) + index

  const body = content.substring(startIndex, endIndex)
  const length = body.length


  return {
    startIndex,
    endIndex,
    length,
    body
  }
}

function getEndIndex(txt) {
  let matchTxt = txt.match(/\r/)
  if (!matchTxt) {
    matchTxt = txt.match(/\n/)
  }
  return matchTxt.index
}