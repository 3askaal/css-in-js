import { colors } from './colors'

export const FUNCTIONS: Record<keyof Theme, Record<string, (...params: any) => string>> = {
  colors
}