import ShortUniqueId from 'short-unique-id'
import { inject } from './inject'
import type { TKeyframesObject } from './types'

export const keyframes = (keyframes: TKeyframesObject): string => {
  const prefix = '@keyframes'
  const name = new ShortUniqueId({ length: 10 }).rnd()
  const animation = JSON.stringify(keyframes, null, 2).replaceAll('"', '').replaceAll('},', '}').replaceAll(': {', ' {')

  inject([prefix, name, animation].join(' '))

  return name
}
