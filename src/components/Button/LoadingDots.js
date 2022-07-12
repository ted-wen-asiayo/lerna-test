import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { variant } from 'styled-system'
// import Dots, { Dot } from '@/components/Loading/Dots'

const loadingSize = props => variant({
  prop: 'size',
  variants: {
    small: {
      lineHeight: '20px',
      padding: '6px 0',
    },
    medium: {
      lineHeight: '24px',
      padding: props.isPureIcon ? '8px' : '8px 0',
    },
    large: {
      lineHeight: '24px',
      padding: props.isPureIcon ? '12px' : '8px 0',
    },
  },
})

// const StyledDots = styled(Dots)`
//   width: 44px;
//   ${Dot} {
//     border-width: ${props => (props.isPureIcon ? '2px' : '4px')};
//   }
//   ${loadingSize}
// `

const LoadingDots = ({ size, isPureIcon }) => (
  null
  // <StyledDots number={3} isPureIcon={isPureIcon} size={size} />
)

LoadingDots.propTypes = {
  isPureIcon: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

export default LoadingDots
