import { Button, Input } from 'antd'
import type { InputProps, ButtonProps } from 'antd'
import { ComponentItem } from '../types'

export const components: ComponentItem[] = [
  {
    type: Button,
    label: '输入框',
    labelCol: 6,
    attrs: <ButtonProps>{
      block: false,
      danger: false,
      ghost: false,
      href: '',
      htmlType: 'button',
      icon: null,
      loading: false,
      shape: 'default',
      size: 'middle',
      target: '',
      type: 'default',
    },
  },
  {
    type: Input,
    label: '输入框',
    labelCol: 6,
    field: 'inputValue',
    rules: [],
    attrs: <InputProps>{
      addonAfter: null,
      addonBefore: null,
      allowClear: false,
      bordered: true,
      placeholder: '请输入',
      disabled: false,
      defaultValue: '',
      maxLength: undefined,
      showCount: false,
      status: '',
      prefix: null,
      size: 'middle',
      suffix: null,
    },
  },
]
