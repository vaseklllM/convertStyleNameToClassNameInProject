const writeContent = require('../utils/writeContent')

module.exports = function convertExportDefaultTypes({path, content}) {
  const fileName = path
    .trim()
    .split('.')
    .filter(i => i)
    .at(-2)
    .split('\\')
    .filter(i => i)
    .at(-1)

  if (fileName !== 'types') {
    return undefined
  }


  const isTypesFile = content.search(/export default \{/g) !== -1

  if (!isTypesFile) return undefined

  let newContent = content.replace('export default {', 'const types = {')

  newContent = `${newContent}
export default types`

  writeContent({path, content: newContent})
}