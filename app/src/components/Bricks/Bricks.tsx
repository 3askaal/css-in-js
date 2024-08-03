import { useEffect, useState } from 'react'
import { random, round, sample, times } from 'lodash'
import { useScreen } from 'usehooks-ts'
import { Row, Col, Box, colors, mix } from '../../../../src'

export const Bricks = () => {
  const [bricks, setBricks] = useState<Array<{ width: number, height: number, color: string }>>([])
  const screen = useScreen({ debounceDelay: 300 })

  useEffect(() => {
    const height = round(screen.height / 300, 2)
    const minWidth = round(screen.width / 30, 2)
    const maxWidth = round(screen.width / 10, 2)
    const amountBricks = round((100 / height) * (screen.width / minWidth))

    setBricks(
      times(amountBricks, () => ({
        width: random(minWidth, maxWidth),
        height,
        color: mix(sample(colors.grey)!, colors.primary, 80)
      }))
    )
  }, [screen])

  return (
    <Box s={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, margin: 'auto' }}>
      <Row gutter="xxxs" s={{ flexWrap: 'wrap' }}>
        { bricks.map(({ width, height, color }, index) => (
          <Col s={{ minWidth: width }} key={`block-${index}`}>
            <Box s={{ minHeight: `${height}vh`, bgc: `[rgba(${color}, 0.07)]` }} />
          </Col>
        )) }
      </Row>
    </Box>
  )
}
