import { FunctionComponent } from 'react'

import type {
  ButtonProps,
  CascaderProps,
  CheckboxProps,
  InputNumberProps,
  InputProps,
  RadioGroupProps,
  RadioProps,
} from 'antd'
import type { PasswordProps } from 'antd/es/input/Password'
import type { SearchProps } from 'antd/es/input/Search'
import type { TextAreaProps } from 'antd/es/input/TextArea'
import { Rule } from 'antd/es/form'
import { SelectProps } from 'antd/lib'
import { OptionProps } from 'antd/es/select'
import { RadioButtonProps } from 'antd/lib/radio/radioButton'

export type ComponentType =
  | 'input'
  | 'password'
  | 'search'
  | 'textarea'
  | 'button'
  | 'cascader'
  | 'checkbox'
  | 'checkboxGroup'
  | 'colorPicker'
  | 'datePicker'
  | 'inputNumber'
  | 'radio'
  | 'radioGroup'
  | 'rate'
  | 'select'
  | 'option'
  | 'slider'
  | 'switch'
  | 'timePicker'
  | 'transfer'
  | 'treeSelect'
  | 'upload'

export interface ComponentItem {
  type: ComponentType
  label?: string
  icon?: FunctionComponent
  value?: any
  field?: string
  showLabel?: boolean
  labelCol?: number
  rules?: Rule[]
  children?: ComponentItem[]
  defaultProps?: Record<string, any>
  required?: boolean
  component?: FunctionComponent
  attrs?:
    | ButtonProps
    | InputProps
    | PasswordProps
    | SearchProps
    | TextAreaProps
    | InputNumberProps
    | SelectProps
    | OptionProps
    | CascaderProps
    | RadioProps
    | RadioGroupProps
    | RadioButtonProps
    | CheckboxProps
}
