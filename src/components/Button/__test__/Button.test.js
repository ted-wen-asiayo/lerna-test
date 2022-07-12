import React from 'react'
import renderer from 'react-test-renderer'
import {
  render, cleanup, fireEvent, screen,
} from '@testing-library/react'
import 'jest-styled-components'
import Icons from '../../Icons'
import colors from '../../../theme/colors'
import Button from '../index'

describe('test Button styles', () => {
  test('button shapes all render correct', () => {
    ['rounded', 'pill'].forEach((shape) => {
      const tree = renderer
        .create(<Button shape={shape}>Shape</Button>)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  test('button size all render correct', () => {
    ['small', 'medium', 'large', 'response'].forEach((size) => {
      const tree = renderer.create(<Button size={size}>Size</Button>).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  const hover = '[type]:not(:disabled):hover'
  const active = '[type]:not(:disabled):active'
  const focus = '[type]:not(:disabled):focus'

  test('primary button style', () => {
    const primary = renderer
      .create(
        <Button styleType="solid" level="primary">
          Primary
        </Button>,
      )
      .toJSON()
    expect(primary).toMatchSnapshot()
    expect(primary).toHaveStyleRule('background-color', colors.blues[6], {
      modifier: hover,
    })
    expect(primary).toHaveStyleRule('background-color', colors.blues[7], {
      modifier: active,
    })
    expect(primary).toHaveStyleRule(
      'box-shadow',
      `0 0 0 2px ${colors.blues[5]}48`,
      { modifier: focus },
    )
  })

  test('secondary button style', () => {
    const secondary = renderer
      .create(
        <Button styleType="outline" level="primary">
          Secondary
        </Button>,
      )
      .toJSON()
    expect(secondary).toHaveStyleRule('background-color', colors.blues[0], {
      modifier: hover,
    })
    expect(secondary).toHaveStyleRule('background-color', colors.blues[1], {
      modifier: active,
    })
    expect(secondary).toHaveStyleRule(
      'box-shadow',
      `0 0 0 2px ${colors.blues[5]}48`,
      { modifier: focus },
    )
  })

  test('tertiary button style', () => {
    const tertiary = renderer
      .create(
        <Button styleType="outline" level="neutral">
          Tertiary
        </Button>,
      )
      .toJSON()
    expect(tertiary).toHaveStyleRule('background-color', colors.grays[2], {
      modifier: hover,
    })
    expect(tertiary).toHaveStyleRule('background-color', colors.grays[3], {
      modifier: active,
    })
    expect(tertiary).toHaveStyleRule(
      'box-shadow',
      `0 0 0 2px ${colors.grays[6]}48`,
      { modifier: focus },
    )
  })

  test('quaternary button style', () => {
    const quaternary = renderer
      .create(
        <Button styleType="flat" level="primary">
          Quaternary
        </Button>,
      )
      .toJSON()
    expect(quaternary).toHaveStyleRule('color', colors.blues[6], { modifier: hover })
    expect(quaternary).toHaveStyleRule('color', colors.blues[7], { modifier: active })
    expect(quaternary).toHaveStyleRule(
      'box-shadow',
      `0 0 0 2px ${colors.blues[5]}48`,
      { modifier: focus },
    )
  })

  test('quaternary danger button style', () => {
    const danger = renderer
      .create(
        <Button styleType="flat" level="danger">
          Delete
        </Button>,
      )
      .toJSON()
    expect(danger).toHaveStyleRule('color', colors.oranges[6], { modifier: hover })
    expect(danger).toHaveStyleRule('color', colors.oranges[7], { modifier: active })
    expect(danger).toHaveStyleRule(
      'box-shadow',
      `0 0 0 2px ${colors.oranges[5]}48`,
      { modifier: focus },
    )
  })

  test('disabled button style', () => {
    const disabled = renderer
      .create(<Button disabled>Disabled</Button>)
      .toJSON()
    expect(disabled).toMatchSnapshot()
    expect(disabled).toHaveStyleRule('opacity', '0.48', {
      modifier: '[type]:disabled',
    })
  })

  test('loading button style', () => {
    const loading = renderer.create(<Button loading>Loading</Button>).toJSON()
    expect(loading).toMatchSnapshot()
    expect(loading).toHaveStyleRule('opacity', '1', {
      modifier: '[type]:disabled',
    })
  })

  test('pureIcon button style', () => {
    const pureIconLoading = render(
      <Button isPureIcon>
        <Icons type="solid" name="home" />
        Loading
      </Button>,
    )
    expect(pureIconLoading).toMatchSnapshot()
  })
})

describe('test Button action', () => {
  afterEach(cleanup)

  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)
    fireEvent.click(screen.getByText('Click Me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('calls onMouseDown prop when mouse down', () => {
    const handleMouseDown = jest.fn()
    render(<Button onMouseDown={handleMouseDown}>Press Down</Button>)
    fireEvent.mouseDown(screen.getByText('Press Down'))
    expect(handleMouseDown).toHaveBeenCalledTimes(1)
  })

  test('calls onMouseUp prop when mouse up', () => {
    const handleMouseUp = jest.fn()
    render(<Button onMouseUp={handleMouseUp}>Press Up</Button>)
    fireEvent.mouseUp(screen.getByText('Press Up'))
    expect(handleMouseUp).toHaveBeenCalledTimes(1)
  })
})
