let tags = []
let ruleCount = 0

const createTag = () => {
  let tag = document.createElement('style')
  tag.appendChild(document.createTextNode(''))
  return tag
}

const insertTag = () => {
  const tag = createTag()
  document.head.appendChild(tag)
  tags.push(tag)
  ruleCount = 0
}

export const inject = (cssString: string): void => {
  if (typeof window === 'undefined') return
  if (ruleCount % 50000 === 0) insertTag()
  
  insertRules(cssString)
}

const insertRules = (cssString: string) => {
  const cssRules = cssString.split(/}\n/)

  for (let i = 0; i < cssRules.length; i++) {
    const cssRule = cssRules[i]
    if (cssRule) insertRule(cssRules[i])
  }
}

const insertRule = (cssRule: string) => {
  const tag = tags[tags.length - 1]

  try {
    tag.sheet?.insertRule(cssRule, tag.sheet?.cssRules.length)
  } catch (err) {
    console.log(err)
  }

  ruleCount++
}