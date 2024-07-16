import { STextArea } from './TextArea.styled'

export const TextArea = ({ value, onChange, ...props }) => {
  return (
    <STextArea defaultValue={value} onChange={(e) => onChange(e.target.value)} {...props} />
  )
}

TextArea.displayName = 'TextArea'
