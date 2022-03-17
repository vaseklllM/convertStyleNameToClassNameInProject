const dirTree = require("directory-tree");
const fs = require('fs');
const convertStyleNameInClassName = require('./convertStyleNameInClassName')

const TEST_FOLDER_PATH = {path: './project/', exclude: [/components/, /Name/, /indexFixed/]}
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
        callback?.(child.path)
      }
    } else {
      openFiles({folder: {path: child.path, exclude: folder.exclude}, types, callback})
    }
  })
}


function getFileContent(path) {
  try {
    const data = fs.readFileSync(path, 'utf8')
    convertStyleNameInClassName({path, content: data})
  } catch (err) {
    console.error(err)
  }
}


