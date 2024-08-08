import { merge } from 'lodash'
import { parse, parseVariants, type Style, type StyleProps, type StyleVariants } from '.'
import type * as CSS from 'csstype'

export const apply = (props: StyleProps, defaults?: Style, variants?: StyleVariants, sref?: string): CSS.Properties => {
  let style = {}

  // Apply defaults
  if (defaults) { style = merge(style, parse(defaults, props)) }

  // Apply variants
  if (variants) { style = merge(style, parseVariants(variants, props)) }

  // Get component styles from theme
  const themeStyles = (props.theme.components?.[props.sref ?? sref ?? '']) ?? {}

  // Apply defaults from theme
  if (themeStyles.defaults) { style = merge(style, parse(themeStyles.defaults, props)) }

  // Apply variants from theme
  if (themeStyles.variants) { style = merge(style, parseVariants(themeStyles.variants, props)) }

  // Apply inline styling
  if (props.s) { style = merge(style, parse(props.s, props)) }

  return style
}
