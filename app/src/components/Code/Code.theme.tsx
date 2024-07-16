import { colors } from '../../../../src'

const orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100'
}

const purple = {
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c'
}

export const CodeTheme = {
  'code[class*="language-"]': {
    background: colors.grey[83],
    color: colors.grey[30],
    lineHeight: '1.375',
    wordSpacing: 'normal',
    whiteSpace: 'pre',
    wordBreak: 'normal',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none'
  },
  'pre[class*="language-"]': {
    padding: '1em',
    color: colors.grey[30],
    lineHeight: '1.375',
    wordSpacing: 'normal',
    whiteSpace: 'pre',
    overflow: 'auto',
    wordBreak: 'normal',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none'
  },
  comment: {
    color: colors.grey[50]
  },
  prolog: {
    color: colors.grey[50]
  },
  doctype: {
    color: colors.grey[50]
  },
  cdata: {
    color: colors.grey[50]
  },
  punctuation: {
    color: colors.grey[50]
  },
  namespace: {
    Opacity: '.7'
  },
  tag: {
    color: colors.primary
  },
  operator: {
    color: purple[200]
  },
  number: {
    color: orange[800]
  },
  property: {
    color: colors.grey[20]
  },
  function: {
    color: colors.grey[1]
  },
  imports: {
    color: colors.grey[1]
  },
  selector: {
    color: colors.grey[20]
  },
  'attr-name': {
    color: orange[300]
  },
  'attr-value': {
    color: colors.secondary
  },
  boolean: {
    color: colors.primary
  },
  string: {
    color: colors.secondary
  },
  entity: {
    color: colors.primary,
    cursor: 'help'
  },
  url: {
    color: colors.primary
  },
  keyword: {
    color: purple[200]
  },
  control: {
    color: colors.primary
  },
  directive: {
    color: colors.primary
  },
  unit: {
    color: colors.primary
  },
  statement: {
    color: colors.primary
  },
  regex: {
    color: colors.primary
  },
  atrule: {
    color: colors.primary
  },
  placeholder: {
    color: colors.primary
  },
  variable: {
    color: colors.primary
  },
  important: {
    color: colors.primaryDark
  },
  italic: {
    fontStyle: 'italic'
  },
  bold: {
    fontWeight: 'bold'
  }
}
