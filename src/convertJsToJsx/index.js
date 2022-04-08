const renameFile = require('../utils/renameFile')


module.exports = function convertJsToJsx({path, content}) {
  const isJsx = content.search(/import React/i) !== -1

  if (!isJsx) return undefined

  const newPath = path + 'x'

  renameFile({prevPath: path, newPath})
}

