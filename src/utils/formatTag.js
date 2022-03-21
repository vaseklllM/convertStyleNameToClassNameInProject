module.exports = function formatTag({tag}) {
  return tag.split(' ').filter(i => i && i !== '\r\n').join(' ')
}