import React, { FC, ReactElement } from 'react'
import { keyGen, Title } from '@core'
import { PreviewComponent } from '@components'
import { SPreview } from './Preview.styled'

export interface PreviewProps {
  title?: string
  children?: any
}

export const Preview: FC<PreviewProps> = ({
  title,
  children,
}: PreviewProps): ReactElement => {
  return (
    <SPreview>
      {title ? (
        <Title level={4} s={{ mb: 'l' }} data-testid="preview-title">
          {title}
        </Title>
      ) : null}
      {(children.length ? children : [children]).map((child: any) => (
        <PreviewComponent key={keyGen()} data-testid="preview-component">
          {child}
        </PreviewComponent>
      ))}
    </SPreview>
  )
}

Preview.displayName = 'Preview'
