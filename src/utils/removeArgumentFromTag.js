const getTagArgumentInfo = require('./getTagArgumentInfo')

module.exports = function removeArgumentFromTag({tag, argument}) {
  const argumentInfo = getTagArgumentInfo({tag, argument})

  return tag.replace(argumentInfo.body, '').replace("  ", ' ')
}