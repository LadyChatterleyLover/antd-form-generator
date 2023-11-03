import { ReactNode } from 'react'
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
} from 'antd'

import type { ButtonProps, InputProps } from 'antd'
import { Rule } from 'antd/es/form'

export type AntdComponent =
  | typeof Button
  | typeof Cascader
  | typeof Checkbox
  | typeof Checkbox.Group
  | typeof DatePicker
  | typeof Input
  | typeof Input.Password
  | typeof Input.TextArea
  | typeof InputNumber
  | typeof Radio
  | typeof Radio.Group
  | typeof Rate
  | typeof Select
  | typeof Select.Option
  | typeof Slider
  | typeof Switch
  | typeof TimePicker
  | typeof Transfer
  | typeof TreeSelect
  | typeof Upload

export interface ComponentItem {
  type: AntdComponent
  label?: string
  icon?: ReactNode
  value?: any
  field?: string
  showLabel?: boolean
  labelCol?: number
  rules?: Rule[]
  children?: ComponentItem[]
  defaultProps?: Record<string, any>
  attrs?: ButtonProps | InputProps
}
