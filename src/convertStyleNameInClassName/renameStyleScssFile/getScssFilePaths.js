module.exports = function getScssFilePaths({path, content}) {
  const scssPathsIndexes = [...content.matchAll(/.scss/g)].map(i => ({index: i.index}))
  const names = scssPathsIndexes.map(i => getNamesByIndexes({index: i.index, content}))

  return names
}

function getNamesByIndexes({index, content}) {
  const left = content.slice(0, index)
  const lastImportPosition = [...left.matchAll(/import/g)].at(-1).index
  const line = left.slice(lastImportPosition)
  const pathLeftPosition = line.match(/("|')/).index
  const filePath = line.slice(pathLeftPosition + 1)
  const filePathFull = filePath + '.scss'
  const fileName = filePathFull.split('/').at(-1)

  return { path: filePathFull, fileName }
}