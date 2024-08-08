import { s } from '../..'

export const SCard = s.div({
  width: '100%',
  border: 'main',
  borderColor: 'primary',
  borderRadius: 'm',
  overflow: 'hidden'
})

export const SCardHeader = s.div({
  padding: 's',
  borderColor: 'primary',
  borderBottom: 'main',
  backgroundColor: 'primary',
  color: 'white'
})

export const SCardContent = s.div({
  padding: 's'
})

export const SCardFooter = s.div({
  padding: 's',
  borderColor: 'primary',
  backgroundColor: 'grey[20]',
  color: 'black'
})

export const Card = ({ header, footer, children, ...props }) => {
  return (
    <SCard sref="Card" {...props}>
      {header && <SCardHeader sref="CardHeader">{header}</SCardHeader>}
      <SCardContent sref="Card_Content">{children}</SCardContent>
      {footer && <SCardFooter sref="CardFooter">{footer}</SCardFooter>}
    </SCard>
  )
}

Card.displayName = 'Card'
