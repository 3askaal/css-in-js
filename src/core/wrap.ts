import styled from 'styled-components'
import { type TSWrapper, type TStyle, type TStyleProps, type TStyleVariants, merge } from '.'

export const s = Object.entries(styled).reduce((acc, [key, func]) => ({
  ...acc,
  [key]: (defaults?: TStyle, variants?: TStyleVariants, id?: string) => {
    return func((props: TStyleProps) => {
      return merge(props, defaults, variants, id)
    })
  }
}), {} as TSWrapper)
