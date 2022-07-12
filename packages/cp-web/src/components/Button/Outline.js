import styled, { css } from 'styled-components'
import { variant } from 'styled-system'
import colors from '../../../../../src/theme/colors'
import { size, iconSize, shape } from '../../../../../src/components/Button/CommonConfig'

const level = variant({
  prop: 'level',
  variants: {
    primary: {
      color: colors.blues[5],
      borderColor: colors.blues[5],
      '&:not(:disabled):hover': {
        bg: colors.blues[0],
      },
      '&:not(:disabled):active': {
        bg: colors.blues[1],
      },
      '&:not(:disabled):focus': {
        boxShadow: `0 0 0 2px ${colors.blues[5]}48`,
      },
    },
    success: {
      color: colors.greens[6],
      borderColor: colors.greens[6],
      '&:not(:disabled):hover': {
        bg: colors.greens[0],
      },
      '&:not(:disabled):active': {
        bg: colors.greens[1],
      },
    },
    warning: {
      color: colors.yellows[6],
      borderColor: colors.yellows[6],
      '&:not(:disabled):hover': {
        bg: colors.yellows[0],
      },
      '&:not(:disabled):active': {
        bg: colors.yellows[1],
      },
    },
    danger: {
      color: colors.oranges[6],
      borderColor: colors.oranges[6],
      '&:not(:disabled):hover': {
        bg: colors.oranges[0],
      },
      '&:not(:disabled):active': {
        bg: colors.oranges[1],
      },
      '&:not(:disabled):focus': {
        boxShadow: `0 0 0 2px ${colors.oranges[5]}48`,
      },
    },
    neutral: {
      color: colors.grays[7],
      borderColor: colors.grays[5],
      '&:not(:disabled):hover': {
        bg: colors.grays[2],
      },
      '&:not(:disabled):active': {
        bg: colors.grays[3],
      },
      '&:not(:disabled):focus': {
        boxShadow: `0 0 0 2px ${colors.grays[6]}48`,
      },
    },
    dark: {
      color: colors.grays[0],
      borderColor: colors.grays[0],
      backgroundColor: '#002138',
      '&:not(:disabled):hover': {
        bg: colors.blues[9],
      },
      '&:not(:disabled):active': {
        bg: colors.blues[8],
      },
    },
  },
})

const Outline = styled.button`
  &[type] {
    background-color: ${colors.grays[0]};
    ${level}
    ${shape}
    ${(props) => css`
      ${props.isPureIcon ? iconSize : size}
    `}
    @media (hover: none) {
      &:not(:disabled):hover {
        background-color: ${colors.grays[0]};
      }
    }
  }
`
export default Outline
