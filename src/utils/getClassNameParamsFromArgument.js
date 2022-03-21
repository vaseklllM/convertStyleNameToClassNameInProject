module.exports = function getClassNameParamsFromArgument({content}) {
  const isTxtJoin = content.search(/txt\.join\(\[/) !== -1


  if (isTxtJoin) {
    const leftIndex = content.search(/\[/)
    const rightIndex = content.search(/\]/)
    const body = content.substring(leftIndex + 1, rightIndex).trim()

    return body.split(',').map(i => i.trim())
  }


  return content.split(' ')
}