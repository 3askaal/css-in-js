import React, { ReactElement, FC, useState } from 'react'
import { X as XIcon } from 'react-feather'
import { Row, Col, Title } from "../.."
import { SPopupWrapper, SPopupCloser, SPopup, SPopupHeader, SPopupHeaderContent, SPopupContent, SPopupFooter, SPopupCloseButton } from './Popup.styled'

export interface PopupProps {
  header?: any
  actions?: any
  children?: any
  onClose?: any
}

export const Popup: FC<PopupProps> = ({
  children,
  header,
  actions,
  onClose,
}: PopupProps): ReactElement | null => {
  const [isOpen, setIsOpen] = useState(true)

  const onCloseHandler = () => {
    if (onClose) {
      setIsOpen(false)
      onClose()
    }
  }

  return isOpen ? (
    <SPopupWrapper data-testid="popup">
      <SPopupCloser
        onClick={onCloseHandler}
        data-testid="popup-closer"
      />
      <SPopup>
        {header ?
          (<SPopupHeader>
            <SPopupHeaderContent>
              <Title level={4}>{header}</Title>
            </SPopupHeaderContent>
            <SPopupCloseButton
              onClick={onCloseHandler}
            >
              <XIcon />
            </SPopupCloseButton>
          </SPopupHeader>
          )
        : null}
        <SPopupContent>
          {children}
          </SPopupContent>
        {actions?.length ? (
          <SPopupFooter>
            <Row gutter="s" s={{flexWrap: 'nowrap'}}>
              {actions.map((action: any) => (
                <Col width={`${100 / actions.length}`} onClick={onCloseHandler}>
                  {action}
                </Col>
              ))}
            </Row>
          </SPopupFooter>
        ) : null}
      </SPopup>
    </SPopupWrapper>
  ) : null
}
