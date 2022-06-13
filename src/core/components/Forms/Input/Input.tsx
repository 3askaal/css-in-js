import React, { ReactElement, FC, useEffect, useRef } from 'react'
import { SInput } from './Input.styled'

export const Input: FC<any> = ({
  value,
  onChange,
  ...props
}: any): ReactElement => {
  const InputRef: any = useRef()

  useEffect(() => {
    if (value !== undefined && value !== null) {
      InputRef.current.value = value
    }
  }, [value])

  return (
    <SInput
      sRef="Input"
      ref={InputRef}
      onChange={onChange ? (e: any) => onChange(e.target.value) : null}
      {...props}
    />
  )
}

Input.defaultProps = {
  type: 'text',
}

Input.displayName = 'Input'
