import { Children } from 'react'
import styledComponents, { CSSObject, DefaultTheme } from 'styled-components'
import { css, CssFunctionReturnType, SystemStyleObject } from '@styled-system/css'
import { forOwn, get, mapValues, wrap } from 'lodash'
import deepmerge from 'deepmerge'

interface Props {
  s?: SystemStyleObject;
  sRef?: string;
  theme?: DefaultTheme;
  children?: Children;
  [key: string]: any;
}

type Styles = SystemStyleObject;
type Variants = { [variantKey: string]: Styles };

function resolveInputType(styles: SystemStyleObject, props: any) {
  if (typeof styles === 'function') {
    return css(styles(props))
  }

  return css(styles)
}

export const styledWrapper = (
  props: Props,
  defaultStyles?: Styles,
  variants?: Variants,
  sRef?: string,
): CssFunctionReturnType[] => {
  const newProps = { ...props }
  const themeStyles = get(props?.theme?.components, sRef || newProps.sRef)

  const styleFunctions: CssFunctionReturnType[] = []

  // TODO: Fix this feature
  // if (newProps.children) {
  //   newProps.children = resolveStylePropOnChildren(
  //     newProps.children,
  //     newProps.s,
  //   )
  // }

  if (defaultStyles) {
    styleFunctions.push(resolveInputType(defaultStyles, newProps))
  }

  if (themeStyles?.default) {
    styleFunctions.push(resolveInputType(themeStyles.default, newProps))
  }

  const mergedVariants = deepmerge(variants, themeStyles?.variants || {})

  forOwn(mergedVariants, (variantStyle: CSSObject, variantKey: string) => {
    if (newProps[variantKey]) {
      styleFunctions.push(resolveInputType(variantStyle, newProps))
    }
  })

  if (newProps.s) {
    styleFunctions.push(resolveInputType({ '&&&': newProps.s }, newProps))
  }

  return styleFunctions
}

export const s = mapValues(
  styledComponents,
  (value) => {
    return wrap(value, (func, ...declProps: [Styles, Variants, string]) => {
      return func((props: Props) => {
        return styledWrapper(props, ...declProps) as React.ComponentType
      })
    })
  },
)
