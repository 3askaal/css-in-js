import styledComponents, { StyledComponent } from 'styled-components'
import { css, CssFunctionReturnType, SystemStyleObject, Theme } from '@styled-system/css'
import { forOwn, get, mapValues, wrap } from 'lodash'
import deepmerge from 'deepmerge'

export type SStyles = SystemStyleObject
export type SVariants = { [variantKey: string]: SStyles }
export type SComponents = { [componentKey: string]: { default?: SStyles, variants?: SVariants } }

export interface ExpectedProps {
  sRef: string;
  children: any;
  theme: Theme & { components: SComponents };
  s: SystemStyleObject;
  [key: string]: any;
}

type DeclProps = (SStyles | SVariants | string)

// Resolves either style functions or style objects
function parseStyles(styles: SystemStyleObject, props: ExpectedProps) {
  return (typeof styles === 'function') ? css(styles(props)) : css(styles);
}

export const mergeStyles = (props: ExpectedProps, ...declParams: DeclProps[]): CssFunctionReturnType[] => {
  const styleFunctions: CssFunctionReturnType[] = []

  // TODO: Define types in order in declParams rest param
  const defaultStyles = declParams[0] as SStyles | undefined
  const variantStyles = declParams[1] as SVariants | undefined
  const sRef = declParams[2] as string | undefined

  // Declare inline styles
  const inlineStyles = props.s

  // Declare component styles defined in theme
  const themeComponentStyles = get(props?.theme?.components, sRef || props.sRef)

  // Apply default styles
  if (defaultStyles) {
    styleFunctions.push(parseStyles(defaultStyles, props))
  }

  // Apply defaullt styles defined in theme
  if (themeComponentStyles?.default) {
    styleFunctions.push(parseStyles(themeComponentStyles.default, props))
  }

  // Apply variants styling
  if (variantStyles || themeComponentStyles?.variants) {
    // Merge variants defined in component and in theme
    const mergedVariants = deepmerge(variantStyles || {}, themeComponentStyles?.variants || {})

    forOwn(mergedVariants, (variantStyle: SystemStyleObject, variantKey: string) => {
      if (props[variantKey]) {
        styleFunctions.push(parseStyles(variantStyle, props))
      }
    })
  }

  // Apply inline styling
  if (inlineStyles) {
    styleFunctions.push(parseStyles({ '&&&': inlineStyles }, props))
  }

  // TODO: Fix this feature
  // if (newProps.children) {
  //   newProps.children = resolveStylePropOnChildren(
  //     newProps.children,
  //     newProps.s,
  //   )
  // }

  return styleFunctions
}

interface WrappedCallback { (props: ExpectedProps): any; }
type Wrapped = (cb: WrappedCallback) => StyledComponent<'div', Theme>;

export const s = mapValues(
  styledComponents,
  (value) => {
    return wrap<Wrapped, DeclProps, StyledComponent<any, Theme>>(value, (func, ...declParams) => {
      return func((props) => {
        return mergeStyles(props, ...declParams)
      })
    })
  },
)
