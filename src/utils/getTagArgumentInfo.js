module.exports = function getTagArgumentInfo({argument, tag}) {
  const argumentReg = new RegExp(`${argument}=`)

  const startIndex = tag.search(argumentReg)
  const startContentIndex = startIndex + 10
  const symbol = tag[startContentIndex]
  const right = tag.substring(startContentIndex + 1, tag.length)
  const endContentIndex = right.search(symbol)
  const endIndex = endContentIndex + startContentIndex + 1
  const content = tag.substring(startContentIndex + 1, endIndex)
  const body = tag.substring(startIndex, endIndex + 1)

  return {
    body,
    content,
    startIndex,
    endIndex,
  }
}