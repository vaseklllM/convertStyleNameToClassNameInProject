const config = require('./config')
const convertOnlyStyleName = require('./tagConverters/convertOnlyStyleName')
const writeChanges = require('./writeChanges')
const renameStyleScssFile = require('./renameStyleScssFile')

module.exports = function convertStyleNameInClassName({path, content}) {
  const isScss = content.search('.scss') !== -1

  if (!isScss) {
    return
  }

  const fixedImport = changeImport(content)
  const fixedStyleName = changeStyleNames(fixedImport)

  writeChanges({content: fixedStyleName, path})
  renameStyleScssFile({content, path})
  // console.log(fixedStyleName)
}

function changeImport(content) {
  return content.replace(/import ("|').\/style.scss("|')/, `import ${config.CLASSES_NAME} from "./${config.SCSS_FILE_NAME}"`)
}

function changeStyleNames(content) {
  const tags = getTags(content)

  let newContent = content

  for (let i = 0; i < tags.length; i++) {
    newContent = changeStyleName(newContent)
  }

  return newContent
}

function changeStyleName(content) {
  const tags = getTags(content)

  return changeStyleNameTagItem({
    tag: tags[0][0],
    index: tags[0].index,
    size: tags[0][0].length,
    content
  })
}

function getTags(content) {
  return [...content.matchAll(/<([^<]+)>/g)]
    .filter(i => !i[0].includes('</'))
    .filter(i => i[0].includes('styleName'))
}


function changeStyleNameTagItem(params) {
  const isStyleName = params.tag.search(/styleName=/) !== -1
  const isClassName = params.tag.search(/className=/) !== -1

  // console.log(isStyleName, isClassName, params.tag)

  switch (true) {
    case isStyleName && !isClassName:
      return convertOnlyStyleName(params)
  }

  // console.log(params)

  // console.log(content, content.search(/styleName/))

  // return '<div className={classes.body}>'
  return params.content
}


