import { useState } from 'react'
import { Title } from '../../../../src'
import { Code } from '../'
import { SPreview, SPreviewDemo, SPreviewDemoContent } from './Preview.styled'

export const PreviewDemo = ({ children }) => {
  const [onChangeRes, setOnChangeRes] = useState<string | null>(null)

  const childrenWithOnChangeListener = {
    ...children,
    props: {
      ...children.props,
      onChange: (newValue) => {
        setOnChangeRes(JSON.stringify(newValue))
      }
    }
  }

  return (
    <SPreviewDemo>
      <SPreviewDemoContent>{ childrenWithOnChangeListener }</SPreviewDemoContent>
      <Code>{children}</Code>
      { onChangeRes && <Code content={`onChange => ${onChangeRes}`} s={{ bgc: 'grey[80]' }} /> }
    </SPreviewDemo>
  )
}

export const Preview = ({ title, children }) => {
  return (
    <SPreview>
      { title && <Title as="h4" s={{ mb: 'm' }}>{ title }</Title> }
      { (children.length ? children : [children]).map((child, index) => (
        <PreviewDemo key={`preview-${index}`}>{ child }</PreviewDemo>
      )) }
    </SPreview>
  )
}

Preview.displayName = 'Preview'
