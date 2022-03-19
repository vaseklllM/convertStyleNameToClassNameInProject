const config = require("../config");

function convertStyleNameToClassName(name) {

  if (name.search(/("|')/) !== -1) {
    return convertHooksName(name)
  } else if (name.includes('-')) {
    return `${config.CLASSES_NAME}["${name}"]`
  }

  return `${config.CLASSES_NAME}.${name}`
}

function convertHooksName(name) {
  const hooks = ["\"", "\'"]

  if (hooks.includes(name[0]) && hooks.includes(name[name.length - 1])) {
    const symbol = name[0]
    const newName = name.replaceAll(symbol, '').trim()
    return convertStyleNameToClassName(newName)
  }

  if (name.search(/\?/) !== -1) {
    return convertRequestStyleName(name)
  }

  return name
}

function convertRequestStyleName(name) {
  const ruleIndex = name.search(/\?/)
  const left = name.substring(0, ruleIndex).trim()

  const ruleClasses = getRuleClasses({name, ruleIndex})

  const newRuleClasses = ruleClasses.map(i => {
    if (i.search(/("|')/) !== -1) {
      return convertStyleNameToClassName(i)
    } else return i
  })

  const right = newRuleClasses.join(' : ')

  return `${left} ? ${right}`
}

function getRuleClasses({name, ruleIndex}) {
  const body = name.substring(ruleIndex + 1, name.length)
  const bodySeparatorIndex = body.search(/\:/)
  return [
    body.substring(0, bodySeparatorIndex).trim(),
    body.substring(bodySeparatorIndex + 1, name.length).trim()
  ]
}


module.exports = {
  convertStyleNameToClassName,
  convertRequestStyleName
}