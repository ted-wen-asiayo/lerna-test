import styled from 'styled-components'
import {
  variant,
  color,
  space,
  shadow,
  border,
  typography,
} from 'styled-system'

const commonStyled = (component) => styled(component)`
  &[type] {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:disabled {
      opacity: ${(props) => (props.loading ? '1' : '0.48')};
      cursor: not-allowed;
    }
    ${color}
    ${space}
    ${shadow}
    ${border}
    ${typography}
  }
`
const size = variant({
  prop: 'size',
  variants: {
    small: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: '500',
      padding: '6px 16px',
      borderWidth: '1px',
      borderStyle: 'solid',
    },
    medium: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '500',
      padding: '8px 20px',
      borderWidth: '1px',
      borderStyle: 'solid',
    },
    large: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '500',
      padding: '12px 24px',
      borderWidth: '1px',
      borderStyle: 'solid',
    },
    response: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '500',
      padding: ['12px 24px', null, '12px 24px', null, '8px 20px'],
      borderWidth: '1px',
      borderStyle: 'solid',
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
      borderWidth: '1px',
      borderStyle: 'solid',
    },
    medium: {
      fontSize: '18px',
      fontWeight: '500',
      width: '40px',
      height: '40px',
      borderWidth: '1px',
      borderStyle: 'solid',
    },
    large: {
      fontSize: '20px',
      fontWeight: '500',
      width: '48px',
      height: '48px',
      borderWidth: '1px',
      borderStyle: 'solid',
    },
    response: {
      fontSize: ['20px', null, '20px', null, '18px'],
      fontWeight: '500',
      width: ['48px', null, '48px', null, '40px'],
      height: ['48px', null, '48px', null, '40px'],
      borderWidth: '1px',
      borderStyle: 'solid',
    },
  },
})

const shape = (props) =>
  variant({
    prop: 'shape',
    variants: {
      rounded: {
        borderRadius: '4px',
      },
      pill: {
        borderRadius: props.size,
      },
    },
  })

export { commonStyled, size, iconSize, shape }
