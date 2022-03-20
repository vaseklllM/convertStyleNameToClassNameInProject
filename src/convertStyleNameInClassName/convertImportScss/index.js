const config = require("../config");

module.exports = function convertImportScss(content) {
  console.log(content)


  return content.replace(
    /import ("|').\/style.scss("|')/,
    `import ${config.CLASSES_NAME} from "./${config.getScssFileName('style')}"`
  )
}