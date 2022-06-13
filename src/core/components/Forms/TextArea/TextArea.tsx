import React, { ReactElement, FC, useEffect, useRef } from 'react'
import { s } from '../../../utils'
import { FormElementReset } from '../reset'

export const STextArea = s.textarea({
  ...FormElementReset,
  display: 'flex',
  border: 'thick',
  color: 'primary',
  width: '100%',
  borderColor: 'primary',
  borderRadius: 'm',
  padding: 's',
  backgroundColor: 'transparent',
  minHeight: '5rem',

  // reset
  overflow: 'auto',
  outline: 'none',
  '-webkit-box-shadow': 'none',
  '-moz-box-shadow': 'none',
  'box-shadow': 'none',
  resize: 'none',
})

export const TextArea: FC<any> = ({
  value,
  onChange,
  ...props
}: any): ReactElement => {
  const TextAreaRef: any = useRef()

  useEffect(() => {
    if (value) {
      TextAreaRef.current.value = value
    }
  }, [value])

  return (
    <STextArea
      sRef="TextArea"
      ref={TextAreaRef}
      {...props}
      onChange={(e: any) => onChange(e.target.value)}
      data-testid="textarea"
    />
  )
}

TextArea.displayName = 'TextArea'
