import { isArray, isObject, merge } from 'lodash'
import { prefix } from 'inline-style-prefixer'
import type * as CSS from 'csstype'

export const flatten = (style: CSS.Properties, parentKey?: string): Record<string, Record<string, string>> => {
  return Object.entries(style).reduce((acc, [key, value]) => {
    if (isObject(value) && !isArray(value)) {
      const isMediaQuery = key.includes('@media')

      if (isMediaQuery) {
        return merge(acc, { [key]: flatten(value, parentKey) })
      }

      const path = parentKey ? `${parentKey} ${key}` : key
      return merge(acc, flatten(value, path))
    }

    return merge(acc, parentKey ? { [parentKey]: { [key]: value } } : { [key]: value })
  }, {})
}

export const stringify = (style: CSS.Properties, depth = 0): string => {
  return Object.entries(style).reduce((acc, [key, value]) => {
    const indent = '  '.repeat(depth)

    if (isObject(value) && !isArray(value)) {
      const cssPath = key.replace(/\s&+/, '')
      return acc + `${indent}${cssPath} {\n${stringify(value, depth + 1)}${indent}}\n`
    }

    const cssKey = key.replace(/([A-Z][a-z]+)/g, '-$1').toLowerCase()

    if (isArray(value)) {
      return acc + value.map((val) => `${indent}${cssKey}: ${String(val)};\n`).join('')
    }

    return acc + `${indent}${cssKey}: ${String(value)};\n`
  }, '')
}

export const css = (style: CSS.Properties, id?: string): string => {
  const flattened = flatten(style, id && `.${id}`)
  const prefixed = prefix(flattened)
  const stringified = stringify(prefixed)

  return stringified
}
