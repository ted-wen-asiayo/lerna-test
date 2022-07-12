import React from 'react'
import Icons from '@/components/Icons'
import Button from '../../../index'

export default {
  title: 'Common/Button',
  args: {
    styleType: 'solid',
    size: 'medium',
    shape: 'rounded',
    level: 'primary',
    loading: false,
    disabled: false,
    showIcon: true,
    text: 'Button',
    isPureIcon: false,
  },
  argTypes: {
    styleType: {
      options: ['solid', 'outline', 'flat'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['small', 'medium', 'large', 'response'],
      control: {
        type: 'inline-radio',
      },
    },
    shape: {
      options: ['rounded', 'pill'],
      control: {
        type: 'inline-radio',
      },
    },
    level: {
      options: [
        'primary',
        'success',
        'warning',
        'danger',
        'neutral',
        'tertiary',
        'ghost',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    showIcon: {
      control: {
        type: 'boolean',
      },
    },
    text: {
      control: {
        type: 'text',
      },
    },
    isPureIcon: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export const CP = args => {
  const { showIcon, isPureIcon, text } = args
  return (
    <div style={{ padding: '10px' }}>
      <Button {...args}>
        {showIcon && <Icons type="solid" name="home" />}
        {!isPureIcon && `${text}`}
      </Button>
    </div>
  )
}
