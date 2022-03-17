module.exports = function getScssFilePaths({path, content}) {
  // console.log(path)

  // const scssPosition =
  const scssPathsIndexes = [...content.matchAll(/.scss/g)].map(i => ({index: i.index}))
  const names = scssPathsIndexes.map(i => getNamesByIndexes({index: i.index}))


  return ''
}

function getNamesByIndexes({index}) {
  console.log(index)
  return {}
}