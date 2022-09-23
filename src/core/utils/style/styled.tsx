import styledComponents, { StyledComponent } from 'styled-components'
import { css, CssFunctionReturnType, SystemStyleObject, Theme } from '@styled-system/css'
import { forOwn, get, mapKeys, wrap } from 'lodash'
import deepmerge from 'deepmerge'

export type SStyles = SystemStyleObject
export type SVariants = { [variantKey: string]: SystemStyleObject }
export type SComponents = { [componentKey: string]: { default?: SystemStyleObject, variants?: SystemStyleObject } }

export interface ExpectedProps {
  sRef: string;
  children: any;
  theme: Theme & { components: SComponents };
  s: SystemStyleObject;
  [key: string]: any;
}

type DeclProps = (SStyles | SVariants | string)

function parseStyles(styles: SystemStyleObject, props: any) {
  return (typeof styles === 'function') ? css(styles(props)) : css(styles);
}

export const mergeStyles = (props: ExpectedProps, ...declProps: DeclProps[]): CssFunctionReturnType[] => {
  const defaultStyles = declProps[0]
  const variantStyles = declProps[1]
  const sRef = declProps[2] || ''

  const { s: inlineProps, ...newProps } = props
  const themeComponentStyles = get(props?.theme?.components, sRef || newProps.sRef)

  const styleFunctions: CssFunctionReturnType[] = []

  // TODO: Fix this feature
  // if (newProps.children) {
  //   newProps.children = resolveStylePropOnChildren(
  //     newProps.children,
  //     newProps.s,
  //   )
  // }

  if (defaultStyles) {
    styleFunctions.push(parseStyles(defaultStyles, newProps))
  }

  if (themeComponentStyles?.default) {
    styleFunctions.push(parseStyles(themeComponentStyles.default, newProps))
  }

  if (variantStyles) {
    const mergedVariants = deepmerge(variantStyles, themeComponentStyles?.variants || {})

    forOwn(mergedVariants, (variantStyle: SystemStyleObject, variantKey: string) => {
      if (newProps[variantKey]) {
        styleFunctions.push(parseStyles(variantStyle, newProps))
      }
    })
  }


  if (inlineProps) {
    styleFunctions.push(parseStyles({ '&&&': newProps.s }, newProps))
  }

  return styleFunctions
}

interface WrappedCallback { (props: ExpectedProps): any; }
type Wrapped = (cb: WrappedCallback) => StyledComponent<'div', Theme>;

export const s = mapKeys(
  styledComponents,
  (value) => {
    return wrap<Wrapped, DeclProps, any>(value, (func, ...declProps) => {
      return func((props) => {
        return mergeStyles(props, ...declProps)
      })
    })
  },
)
