import { times } from 'lodash'
import { darken, lighten, mix } from '../'

const white: string = darken('white', 10)
const black: string = lighten('black', 10)

const primary = '#40a578'
const secondary = '#7bbb6a'

const primaryDark: string = darken(primary, 10)
const secondaryDark: string = darken(secondary, 10)

const primaryLight: string = lighten(primary, 10)
const secondaryLight: string = lighten(secondary, 10)

const grey: Record<number, string> = times(100, (i) => darken('white', i + 1))
  .reduce((acc, color, index) => ({ ...acc, [index + 1]: color }), {})

export const colors = {
  white,
  black,
  grey,
  primary,
  primaryLight,
  primaryDark,
  secondary,
  secondaryLight,
  secondaryDark,
  positive: mix('green', primary, 30),
  negative: mix('red', primary, 30)
}
