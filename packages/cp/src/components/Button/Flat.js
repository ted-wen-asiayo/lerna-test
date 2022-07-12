import styled, { css } from 'styled-components'
import { variant } from 'styled-system'
import colors from '../../../../../src/theme/colors'

const size = variant({
  prop: 'size',
  variants: {
    small: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: '500',
    },
    medium: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '500',
    },
    large: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '500',
    },
    response: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '500',
    },
  },
})

const iconSize = variant({
  prop: 'size',
  variants: {
    small: {
      fontSize: '16px',
      fontWeight: '500',
      width: '32px',
      height: '32px',
    },
    medium: {
      fontSize: '24px',
      fontWeight: '500',
      width: '40px',
      height: '40px',
    },
    large: {
      fontSize: '24px',
      fontWeight: '500',
      width: '48px',
      height: '48px',
    },
    response: {
      fontSize: '24px',
      fontWeight: '500',
      width: ['48px', null, '48px', null, '40px'],
      height: ['48px', null, '48px', null, '40px'],
    },
  },
})

const level = variant({
  prop: 'level',
  variants: {
    primary: {
      color: colors.blues[5],
      '&:not(:disabled):hover': {
        color: colors.blues[6],
      },
      '&:not(:disabled):active': {
        color: colors.blues[7],
      },
      '&:not(:disabled):focus': {
        boxShadow: `0 0 0 2px ${colors.blues[5]}48`,
      },
    },
    success: {
      color: colors.greens[5],
      '&:not(:disabled):hover': {
        color: colors.greens[6],
      },
      '&:not(:disabled):active': {
        color: colors.greens[7],
      },
    },
    warning: {
      color: colors.yellows[5],
      '&:not(:disabled):hover': {
        color: colors.yellows[6],
      },
      '&:not(:disabled):active': {
        color: colors.yellows[7],
      },
    },
    danger: {
      color: colors.oranges[5],
      '&:not(:disabled):hover': {
        color: colors.oranges[6],
      },
      '&:not(:disabled):active': {
        color: colors.oranges[7],
      },
      '&:not(:disabled):focus': {
        boxShadow: `0 0 0 2px ${colors.oranges[5]}48`,
      },
    },
    neutral: {
      color: colors.grays[5],
      '&:not(:disabled):hover': {
        color: colors.grays[6],
      },
      '&:not(:disabled):active': {
        color: colors.grays[7],
      },
    },
  },
})

const hoverNoneLevel = variant({
  prop: 'level',
  variants: {
    primary: {
      color: colors.blues[5],
    },
    success: {
      color: colors.greens[5],
    },
    warning: {
      color: colors.yellows[5],
    },
    danger: {
      color: colors.oranges[5],
    },
    neutral: {
      color: colors.grays[5],
    },
  },
})

const Flat = styled.button`
  &[type] {
    border-radius: 4px;
    ${level}
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

Flat.defaultProps = {
  size: 'small',
  level: 'primary',
}

export default Flat
