const convertOnlyStyleName = require('./tagConverters/convertOnlyStyleName')
const renameStyleScssFile = require('./renameStyleScssFile')
const writeContent = require('./writeContent')
const addJoin = require('./addJoin')
const convertImportScss = require('./convertImportScss')
const convertHybridStyleNameAndClassName = require('./tagConverters/convertHybridStyleNameAndClassName')


module.exports = function convertStyleNameInClassName({path, content, outputPath}) {
  const isScss = content.search('.scss') !== -1


  if (!isScss) {
    return
  }

  let newContent = content

  newContent = convertImportScss(newContent)
  newContent = changeStyleNames(newContent)
  newContent = addJoin(newContent)

  writeContent({content: newContent, path: outputPath})
  renameStyleScssFile({content, path, outputPath})
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


  switch (true) {
    case isStyleName && !isClassName:
      return convertOnlyStyleName(params)

    case isStyleName && isClassName:
      return convertHybridStyleNameAndClassName(params)
  }


  return params.content
}


