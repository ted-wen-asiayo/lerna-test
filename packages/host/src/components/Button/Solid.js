import styled, { css } from 'styled-components'
import { variant } from 'styled-system'
import colors from '../../../../../src/theme/colors'
import { size, iconSize, shape } from '../../../../../src/components/Button/CommonConfig'

const level = variant({
  prop: 'level',
  variants: {
    primary: {
      color: colors.grays[0],
      bg: colors.hostPrimary[6],
      borderColor: colors.hostPrimary[6],
      '&:not(:disabled):hover': {
        bg: colors.hostPrimary[7],
        borderColor: colors.hostPrimary[7],
      },
      '&:not(:disabled):active': {
        bg: colors.hostPrimary[8],
        borderColor: colors.hostPrimary[8],
      },
      '&:not(:disabled):focus': {
        borderColor: colors.hostPrimary[6],
        boxShadow: `0 0 0 2px ${colors.hostPrimary[6]}48`,
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
      '&:not(:disabled):focus': {
        borderColor: colors.oranges[5],
        boxShadow: `0 0 0 2px ${colors.oranges[5]}48`,
      },
    },
  },
})

const hoverNoneLevel = variant({
  prop: 'level',
  variants: {
    primary: {
      bg: colors.hostPrimary[6],
    },
    danger: {
      bg: colors.oranges[5],
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
