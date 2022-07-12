import styled, { css } from 'styled-components'
import { variant } from 'styled-system'
import colors from '../../../../../src/theme/colors'
import { size, iconSize, shape } from '../../../../../src/components/Button/CommonConfig'

const level = variant({
  prop: 'level',
  variants: {
    primary: {
      color: colors.grays[0],
      bg: colors.blues[5],
      borderColor: colors.blues[5],
      '&:not(:disabled):hover': {
        bg: colors.blues[6],
        borderColor: colors.blues[6],
      },
      '&:not(:disabled):active': {
        bg: colors.blues[7],
        borderColor: colors.blues[7],
      },
      '&:not(:disabled):focus': {
        borderColor: colors.blues[5],
        boxShadow: `0 0 0 2px ${colors.blues[5]}48`,
      },
    },
    success: {
      color: colors.grays[0],
      bg: colors.greens[5],
      borderColor: colors.greens[5],
      '&:not(:disabled):hover': {
        bg: colors.greens[6],
        borderColor: colors.greens[6],
      },
      '&:not(:disabled):active': {
        bg: colors.greens[7],
        borderColor: colors.greens[7],
      },
    },
    warning: {
      color: colors.grays[0],
      bg: colors.yellows[5],
      borderColor: colors.yellows[5],
      '&:not(:disabled):hover': {
        bg: colors.yellows[6],
        borderColor: colors.yellows[6],
      },
      '&:not(:disabled):active': {
        bg: colors.yellows[7],
        borderColor: colors.yellows[7],
      },
    },
    danger: {
      color: colors.grays[0],
      bg: colors.oranges[5],
      borderColor: colors.oranges[5],
      '&:not(:disabled):hover': {
        bg: colors.oranges[6],
        borderColor: colors.oranges[6],
      },
      '&:not(:disabled):active': {
        bg: colors.oranges[7],
        borderColor: colors.oranges[7],
      },
    },
    neutral: {
      color: colors.grays[0],
      bg: colors.grays[5],
      borderColor: colors.grays[5],
      '&:not(:disabled):hover': {
        bg: colors.grays[6],
        borderColor: colors.grays[6],
      },
      '&:not(:disabled):active': {
        bg: colors.grays[7],
        borderColor: colors.grays[7],
      },
    },
    tertiary: {
      color: colors.grays[7],
      bg: colors.grays[0],
      borderColor: colors.grays[0],
      '&:not(:disabled):hover': {
        bg: colors.grays[2],
        borderColor: colors.grays[2],
      },
      '&:not(:disabled):active': {
        bg: colors.grays[3],
        borderColor: colors.grays[3],
      },
    },
    ghost: {
      color: colors.grays[0],
      borderColor: 'transparent',
      '&:not(:disabled):hover': {
        bg: `${colors.grays[9]}16`,
      },
      '&:not(:disabled):active': {
        bg: `${colors.grays[9]}32`,
      },
    },
    momo: {
      color: colors.grays[0],
      bg: colors.peaches[5],
      borderColor: colors.peaches[5],
      '&:not(:disabled):hover': {
        bg: colors.peaches[6],
        borderColor: colors.peaches[6],
      },
      '&:not(:disabled):active': {
        bg: colors.peaches[7],
        borderColor: colors.peaches[7],
      },
    },
  },
})

const hoverNoneLevel = variant({
  prop: 'level',
  variants: {
    primary: {
      bg: colors.blues[5],
    },
    success: {
      bg: colors.greens[5],
    },
    warning: {
      bg: colors.yellows[5],
    },
    danger: {
      bg: colors.oranges[5],
    },
    neutral: {
      bg: colors.grays[5],
    },
    tertiary: {
      bg: colors.grays[0],
    },
    ghost: {
      bg: 'unset',
    },
  },
})

const Solid = styled.button`
  &[type] {
    ${level}
    ${shape}
    ${(props) => css`
      ${props.isPureIcon ? iconSize : size}
    `}
    @media (hover: none) {
      &:hover {
        ${hoverNoneLevel}
      }
    }
  }
`

Solid.defaultProps = {
  size: 'small',
  shape: 'rounded',
  level: 'primary',
}

export default Solid
