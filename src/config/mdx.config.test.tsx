import React from 'react'
import { mapKeys, capitalize } from 'lodash'
import { MdxComponents } from './mdx.config'
import { render } from '../tests'

const MdxComponentsCamelCase = mapKeys(MdxComponents, (value, key)=> capitalize(key))

describe.only('MDX', () => {
  it('renders title blocks', () => {
    const { queryByTestId } = render(
      <>
        <MdxComponentsCamelCase.H1>Title 1</MdxComponentsCamelCase.H1>
        <MdxComponentsCamelCase.H2>Title 2</MdxComponentsCamelCase.H2>
        <MdxComponentsCamelCase.H3>Title 3</MdxComponentsCamelCase.H3>
        <MdxComponentsCamelCase.H4>Title 4</MdxComponentsCamelCase.H4>
        <MdxComponentsCamelCase.H5>Title 5</MdxComponentsCamelCase.H5>
        <MdxComponentsCamelCase.H6>Title 6</MdxComponentsCamelCase.H6>
      </>
    )

    expect(queryByTestId('mdx-title-1')).toBeTruthy()
    expect(queryByTestId('mdx-title-2')).toBeTruthy()
    expect(queryByTestId('mdx-title-3')).toBeTruthy()
    expect(queryByTestId('mdx-title-4')).toBeTruthy()
    expect(queryByTestId('mdx-title-5')).toBeTruthy()
    expect(queryByTestId('mdx-title-6')).toBeTruthy()
  })

  it('renders code blocks', () => {
    const { queryByTestId } = render(
      <>
        <MdxComponentsCamelCase.Code>
          <p>code</p>
        </MdxComponentsCamelCase.Code>
        <MdxComponentsCamelCase.Inlinecode>
          <p>code</p>
        </MdxComponentsCamelCase.Inlinecode>
      </>
    )

    expect(queryByTestId('mdx-code')).toBeTruthy()
    expect(queryByTestId('mdx-inline-code')).toBeTruthy()
  })

  it('renders section block', () => {
    const { queryByTestId } = render(
      <MdxComponentsCamelCase.Section>
        <p>code</p>
      </MdxComponentsCamelCase.Section>
    )

    expect(queryByTestId('mdx-section')).toBeTruthy()
  })
})
