import { Tabs, TabsProps } from 'antd'
import FormAttrs from '../formAttrs/FormAttrs'

const RightSider = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '组件属性',
      children: <FormAttrs></FormAttrs>,
    },
    {
      key: '2',
      label: '表单属性',
      children: 'Content of Tab Pane 2',
    },
  ]

  return <Tabs defaultActiveKey='1' centered items={items} />
}

export default RightSider
