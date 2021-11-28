import { colors, palette, presets, states } from '.'

export const theme: any = {
  breakpoints: ['320px', '576px', '768px', '992px', '1200px'],
  rootFontSizes: ['12px', '14px', '16px'],
  space: {
    xxxs: '0.2rem',
    xxs: '0.25rem',
    xs: '0.5rem',
    s: '0.75rem',
    m: '1.25rem',
    l: '2.5rem',
    xl: '3.75rem',
    xxl: '5rem',
  },
  durations: {
    s: '0.2s',
    m: '0.4s',
    l: '0.6s',
    xl: '0.8s',
    xxl: '1.2s',
  },
  borders: {
    main: `1px solid`,
    thick: `2px solid`,
  },
  colors,
  fonts: {
    base: "'Source Sans Pro', Helvetica, Arial, sans-serif",
    title: "'Source Sans Pro', Helvetica, Arial, sans-serif",
    code: 'Consolas, Monaco, monospace, Arial, sans-serif',
  },
  fontSizes: {
    xs: '0.8em',
    s: '0.9em',
    m: '1em',
    l: '1.4em',
  },
  palette,
  presets,
  states,
  radii: {
    xs: '0.075rem',
    s: '0.125rem',
    m: '0.25rem',
    l: '0.5rem',
  },
  components: {
    Box: {
      variants: {
        isPreview: {
          bg: 'primary',
          color: 'white',
          paddingY: 's',
          paddingX: 'xs',
          borderRadius: 'm',
        },
      },
    },
  },
}
