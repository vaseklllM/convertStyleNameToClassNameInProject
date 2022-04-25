const dirTree = require("directory-tree");
const fs = require('fs');
const convertStyleNameInClassName = require('./convertStyleNameInClassName')
const convertJsToJsx = require('./convertJsToJsx')
const convertExportDefaultTypes = require('./convertExportDefaultTypes')

const TEST_FOLDER_PATH = {
  path: './project/',
  outputPath: 'projectNew',
  exclude: [/components/, /Name/]
}

const VSEVMESTE_FOLDER_PATH = {
  path: '..\\vv_new_front\\src',


  // path: '..\\vv_new_front\\fixStyleNameTextSpace',
  // outputPath: '..\\vv_new_front\\fixStyleNameTextSpace'
}


openFiles({
  folder: VSEVMESTE_FOLDER_PATH,
  types: ['js'],
  callback: getFileContent
})


function openFiles({folder, types = [], callback}) {
  const files = dirTree(folder.path, {exclude: folder.exclude});

  files.children.forEach((child) => {
    if (!child.children) {
      const type = child.name.split('.').at(-1);
      if (types.includes(type)) {
        callback?.(
          child.path,
          convertOutputPath({
            path: child.path,
            outputPath: folder.outputPath
          })
        )
      }
    } else {
      openFiles(
        {
          folder:
            {
              path: child.path,
              exclude: folder.exclude,
              outputPath: folder.outputPath
            },
          types,
          callback
        })
    }
  })
}


function getFileContent(path, outputPath) {
  try {
    const data = fs.readFileSync(path, 'utf8')
    convertExportDefaultTypes({path, content: data})
    // convertJsToJsx({path, content: data})
    // convertStyleNameInClassName({path, content: data, outputPath})
  } catch (err) {
    console.error(err)
  }
}

function convertOutputPath({path, outputPath}) {
  const pathArr = path.split('\\')

  if (!outputPath) return path

  if (outputPath.search(/\.\./) === -1) {
    pathArr[0] = outputPath
    return pathArr.join('\\')
  }

  return path
}
