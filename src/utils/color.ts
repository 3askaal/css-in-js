import Color from 'tinycolor2'

export const darken = (color: string, amount = 0.2): string => {
  return new Color(color).darken(amount).toRgbString()
}

export const lighten = (color: string, amount = 0.2): string => {
  return new Color(color).lighten(amount).toRgbString()
}

export const rgba = (color: string, amount = 0.2): string => {
  return new Color(color).setAlpha(amount).toRgbString()
}

export const mix = (firstColor: string, secondColor: string, amount?: number): string => {
  return Color.mix(new Color(firstColor), new Color(secondColor), amount).toRgbString()
}
