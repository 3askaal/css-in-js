import { get } from 'lodash'
import { colors } from './colors'
import type { TStyleProps, TTheme } from '../types'

export const MUTATIONS: Record<keyof TTheme, Record<string, (...params: any) => string>> = {
  colors
}

// example: [rgba(rgb(255, 0, 0), .25)]
export const getMutatedValue = (value: string, themeKey: keyof TTheme, props: TStyleProps): string | null => {
  // get name: [<...>(rgb(255, 0, 0), .25)]
  const m = value.match(/\[([^]*?)\(/)?.[1] ?? ''
  if (!m) return null

  // define function
  const mutation = MUTATIONS[themeKey]?.[m]
  if (mutation === undefined) return null

  // get params: [rgba(<...>)]
  const p = value.match(/(?<=\()(.*?)+(?=\))/)?.[0]
  if (!p) return null

  // split params by comma (only inside the outer paranthesis)
  const params = p?.split(/[,](?=(?:[^)]*\([^(]*\))*[^()]*$)+/gi) ?? []
  if (!params.length) return null

  // map theme values
  const themeParams: string[] = params.map((param) => (themeKey && get(props.theme[themeKey], param)) ?? param)
  if (!themeParams.length) return null

  // call mutation with theme values
  return mutation(...themeParams)
}
