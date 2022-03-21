module.exports = function getTagArgumentInfo({argument, tag}) {
  const argumentReg = new RegExp(`${argument}=`)

  const startIndex = tag.search(argumentReg)
  const startContentIndex = startIndex + 10
  const symbolLeft = tag[startContentIndex]
  const symbolRight = getSymbolRight(symbolLeft)

  const right = tag.substring(startContentIndex + 1, tag.length)
  const endContentIndex = right.search(symbolRight)
  const endIndex = endContentIndex + startContentIndex + 1
  let content = tag.substring(startContentIndex + 1, endIndex)
  const body = tag.substring(startIndex, endIndex + 1)

  if (['\'', '\"'].includes(symbolLeft)) {
    content = `${symbolLeft}${content}${symbolRight}`
  }

  return {
    body,
    content,
    startIndex,
    endIndex,
    symbolLeft,
    symbolRight
  }
}


function getSymbolRight(symbolLeft) {
  switch (symbolLeft) {
    case "{" :
      return "}"

    default:
      return symbolLeft
  }
}