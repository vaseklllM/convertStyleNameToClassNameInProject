const getLineInfoByIndex = require('./getLineInfoByIndex')

module.exports = function removeLineByIndex({content, index}) {
  const lineInfo = getLineInfoByIndex({content, index})
  const bodyReg = new RegExp(`${lineInfo.body}\r\n`)

  return content.replace(bodyReg, "")
}