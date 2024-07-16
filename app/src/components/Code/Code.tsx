import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import renderJsx from 'react-element-to-jsx-string'
import { SCode } from './Code.styled'
import { CodeTheme } from './Code.theme'

export const Code = ({
  children,
  content = '',
  lang = 'tsx',
  ...props
}) => {
  return (
    <SCode {...props}>
      <SyntaxHighlighter language={lang} style={CodeTheme}>
        { children ? renderJsx(children, { maxInlineAttributesLineLength: 200 }) : content }
      </SyntaxHighlighter>
    </SCode>
  )
}
