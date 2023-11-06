import { Tabs, TabsProps } from 'antd'
import ComponentAttrs from '../componentAttrs/ComponentAttrs'
import FormAttrs from '../formAttrs/FormAttrs'

const RightSider = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '组件属性',
      children: <ComponentAttrs></ComponentAttrs>,
    },
    {
      key: '2',
      label: '表单属性',
      children: <FormAttrs></FormAttrs>,
    },
  ]

  return <Tabs defaultActiveKey='1' centered items={items} />
}

export default RightSider
