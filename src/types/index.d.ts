import type { FC, PropsWithChildren } from 'react'
import type { SHORTHANDS, TAGS } from '../constants'
import type { colors } from '..'
import type * as CSS from 'csstype'

export type ThemeColors = typeof colors;

export type ThemeComponents = Record<string, { defaults?: Style, variants?: StyleVariants }>;

export interface Theme {
  breakpoints: Array<string | number>
  rootFontSizes: Array<string | number>
  fontSizes: Record<string, string | number>
  fonts: Record<string, string>
  colors: ThemeColors
  space: Record<string, string | number>
  sizes: Record<string, number>
  borders: Record<string, string>
  radii: Record<string, string | number>
  durations: Record<string, string | number>
  components?: ThemeComponents
}

export type StyleObjectKeys = keyof CSS.Properties | keyof CSS.Pseudos | keyof typeof SHORTHANDS
export type StyleObjectValues<key> = CSS.Properties[key] | [CSS.Properties[key], ...Array<CSS.Properties[key]>]
export type StyleObject = Partial<{ [key in StyleObjectKeys]: StyleObjectValues<key> }>
export type StyleFunction = (props: StyleProps) => StyleObject
export type Style = StyleObject | StyleFunction
export type StyleVariants = Record<string, Style> | ((props: StyleProps) => Record<string, Style>)
export type StyleProps = { theme: Theme, s?: Style, sref?: string, [key: string]: any } & PropsWithChildren

export type KeyframesKeys = 'from' | 'to' | '1%' | '2%' | '3%' | '4%' | '5%' | '6%' | '7%' | '8%' | '9%' | '10%' | '11%' | '12%' | '13%' | '14%' | '15%' | '16%' | '17%' | '18%' | '19%' | '20%' | '21%' | '22%' | '23%' | '24%' | '25%' | '26%' | '27%' | '28%' | '29%' | '30%' | '31%' | '32%' | '33%' | '34%' | '35%' | '36%' | '37%' | '38%' | '39%' | '40%' | '41%' | '42%' | '43%' | '44%' | '45%' | '46%' | '47%' | '48%' | '49%' | '50%' | '51%' | '52%' | '53%' | '54%' | '55%' | '56%' | '57%' | '58%' | '59%' | '60%' | '61%' | '62%' | '63%' | '64%' | '65%' | '66%' | '67%' | '68%' | '69%' | '70%' | '71%' | '72%' | '73%' | '74%' | '75%' | '76%' | '77%' | '78%' | '79%' | '80%' | '81%' | '82%' | '83%' | '84%' | '85%' | '86%' | '87%' | '88%' | '89%' | '90%' | '91%' | '92%' | '93%' | '94%' | '95%' | '96%' | '97%' | '98%' | '99%' | '100%'
export type KeyframesObject = Partial<Record<KeyframesKeys, StyleObject>>

export type SDefault = ((style: Style) => (props: Record<string, boolean>) => null)
export type STags = { [key in typeof TAGS]: (defaults: Style, variants?: Style, id?: string) => any }
export type S = SDefault & STags
