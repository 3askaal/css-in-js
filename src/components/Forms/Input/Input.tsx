import { SInput } from './Input.styled'

export const Input = ({ value, onChange, ...props }) => {
  return (
    <SInput defaultValue={value} onChange={(e) => onChange(e.target.value)} {...props} />
  )
}

Input.defaultProps = {
  type: 'text'
}

Input.displayName = 'Input'
