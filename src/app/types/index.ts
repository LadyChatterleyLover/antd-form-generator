import { FunctionComponent } from 'react'

import type { ButtonProps, InputProps } from 'antd'
import type { PasswordProps } from 'antd/es/input/Password'
import type { SearchProps } from 'antd/es/input/Search'
import type { TextAreaProps } from 'antd/es/input/TextArea'
import { Rule } from 'antd/es/form'

export interface ComponentItem {
  type: string
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
  attrs?: ButtonProps | InputProps | PasswordProps | SearchProps | TextAreaProps
}
