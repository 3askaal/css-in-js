import ShortUniqueId from 'short-unique-id'
import { stringify, inject } from './'
import type { KeyframesObject } from './types'

export const keyframes = (keyframes: KeyframesObject): string => {
  const id = new ShortUniqueId({ length: 20, dictionary: 'alpha' }).rnd()
  const css = `@keyframes ${id} {\n${stringify(keyframes, 1)}}\n`

  inject(css)

  return id
}
