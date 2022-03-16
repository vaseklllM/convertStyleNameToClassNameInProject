const config = require("../config");


module.exports = function convertName(name) {
  if (name.includes('-')) {
    return `{${config.CLASSES_NAME}["${name}"]}`
  }

  return `{${config.CLASSES_NAME}.${name}}`
}