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

const { Password, Search, TextArea } = Input
const { Group: CheckboxGroup } = Checkbox
const { Group: RadioGroup } = Radio
const { Option } = Select

const componentList = [
  {
    type: 'button',
    component: Button,
  },
  {
    type: 'cascader',
    component: Cascader,
  },
  {
    type: 'checkbox',
    component: Checkbox,
  },
  {
    type: 'checkboxGroup',
    component: CheckboxGroup,
  },
  {
    type: 'datePicker',
    component: DatePicker,
  },
  {
    type: 'password',
    component: Password,
  },
  {
    type: 'search',
    component: Search,
  },
  {
    type: 'textArea',
    component: TextArea,
  },
  {
    type: 'input',
    component: Input,
  },
  {
    type: 'inputNumber',
    component: InputNumber,
  },
  {
    type: 'radio',
    component: Radio,
  },
  {
    type: 'radioGroup',
    component: RadioGroup,
  },
  {
    type: 'rate',
    component: Rate,
  },
  {
    type: 'select',
    component: Select,
  },
  {
    type: 'option',
    component: Option,
  },
  {
    type: 'slider',
    component: Slider,
  },
  {
    type: 'switch',
    component: Switch,
  },
  {
    type: 'timePicker',
    component: TimePicker,
  },
  {
    type: 'transfer',
    component: Transfer,
  },
  {
    type: 'treeSelect',
    component: TreeSelect,
  },
  {
    type: 'upload',
    component: Upload,
  },
]

export const renderComponent = (type: string) => {
  return componentList.find(item => item.type === type)?.component
}
