import type { PropsWithChildren } from 'react'
import type { SHORTHANDS } from '../constants'
import type { colors } from '../../style'
import type styled from 'styled-components'
import type * as CSS from 'csstype'

export type TThemeColors = typeof colors;

export type TThemeComponents = Record<string, { defaults?: TStyle, variants?: TStyleVariants }>;

export interface TTheme {
  breakpoints: Array<string | number>
  rootFontSizes: Array<string | number>
  fontSizes: Record<string, string | number>
  fonts: Record<string, string>
  colors: TThemeColors
  space: Record<string, string | number>
  durations: Record<string, string | number>
  borders: Record<string, string>
  radii: Record<string, string | number>
  components?: TThemeComponents
}

export type TStyleObjectKeys = Array<keyof CSS.Properties | keyof typeof SHORTHANDS>
export type TStyleObjectValues<key> = CSS.Properties[key] | [CSS.Properties[key], ...Array<CSS.Properties[key]>]
export type TStyleObject = { [key in TStyleObjectKeys]?: TStyleObjectValues<key> }
export type TStyleFunction = (props: TStyleProps) => TStyleObject
export type TStyle = TStyleObject | TStyleFunction
export type TStyleVariants = Record<string, TStyle> | ((props: TStyleProps) => Record<string, TStyle>)
export type TStyleProps = { theme: TTheme, s?: TStyle, id?: string, [key: string]: any } & PropsWithChildren

export type TSWrapper = {
  [key in keyof typeof styled]: (defaults: TStyle, variants?: TStyle, id?: string) => (typeof styled)[key]
}
