module.exports = function addArgumentToTag({tag, argument}) {
  const startIndex = getStartIndex(tag)

  const left = tag.substring(0, startIndex)
  const right = tag.substring(startIndex, tag.length)

  return `${left} ${argument} ${right}`
}

function getStartIndex(tag) {
  const firstSpace = [...tag.matchAll(new RegExp(' ', 'g'))]

  if (firstSpace[0].index !== 1) {
    return firstSpace[0].index
  }
  const tagNameInfo = tag.match(new RegExp(/\w+/))

  return tagNameInfo.index + tagNameInfo[0].length
}