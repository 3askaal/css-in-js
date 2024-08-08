import { get } from 'lodash'
import { FUNCTIONS } from './functions'
import type { StyleProps, Theme } from '../types'

// example: [rgba(rgb(255, 0, 0), .25)]
export const mutateValue = (value: string, themeKey: keyof Theme, props: StyleProps): string | null => {
  // get function string: [<...>(rgb(255, 0, 0), .25)]
  const funcString = value.match(/\[([^]*?)\(/)?.[1] ?? ''
  if (!funcString) return null

  // define function
  const func = FUNCTIONS[themeKey]?.[funcString]
  if (func === undefined) return null

  // get params string: [rgba(<...>)]
  const paramString = value.match(/(?<=\()(.*?)+(?=\))/)?.[0]
  if (!paramString) return null

  // split params by comma (only inside the outer paranthesis)
  const params = paramString.split(/[,](?=(?:[^)]*\([^(]*\))*[^()]*$)+/g) ?? []
  if (!params.length) return null

  // map theme values
  const themeParams: string[] = params.map((param) => (themeKey && get(props.theme[themeKey], param)) ?? param)
  if (!themeParams.length) return null

  // call mutation with theme values
  return func(...themeParams)
}
