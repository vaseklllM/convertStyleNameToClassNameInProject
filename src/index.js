const dirTree = require("directory-tree");
const fs = require('fs');
const convertStyleNameInClassName = require('./convertStyleNameInClassName')

const TEST_FOLDER_PATH = {
  path: './project/',
  outputPath: 'projectNew',
  exclude: [/components/]
}
// const VSEVMESTE_FOLDER_PATH = {path: '../vv_new_front/src'}


openFiles({
  folder: TEST_FOLDER_PATH,
  types: ['js'],
  callback: getFileContent
})


function openFiles({folder, types = ['js'], callback}) {
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
    convertStyleNameInClassName({path, content: data, outputPath})
  } catch (err) {
    console.error(err)
  }
}

function convertOutputPath({path, outputPath}) {
  const pathArr = path.split('\\')
  pathArr[0] = outputPath
  return pathArr.join('\\')
}
