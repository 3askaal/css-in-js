import { useEffect, useState } from 'react'
import { random, round, sample, times } from 'lodash'
import { useScreen } from 'usehooks-ts'
import { Row, Col, Box, rgba, colors, mix } from '../../../../src'

export const Background = () => {
  const [cols, setCols] = useState([])
  const screen = useScreen({ debounceDelay: 300 })

  useEffect(() => {
    const height = round(screen.height / 300, 2)
    const minWidth = round(screen.width / 30, 2)
    const maxWidth = round(screen.width / 10, 2)
    const amountCols = round((100 / height) * (screen.width / minWidth))

    const newCols = times(amountCols, () => ({
      width: random(minWidth, maxWidth),
      height,
      color: mix(sample(colors.grey), colors.primary, 70)
    }))

    setCols(newCols)
  }, [screen])

  return (
    <Box s={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, margin: 'auto' }}>
      <Row gutter="xxxs" s={{ flexWrap: 'wrap' }}>
        { cols.map(({ width, height, color }, index) => (
          <Col s={{ minWidth: width }} key={`block-${index}`}>
            <Box s={{ minHeight: `${height}vh`, bgc: rgba(color, 0.05) }} />
          </Col>
        )) }
      </Row>
    </Box>
  )
}
