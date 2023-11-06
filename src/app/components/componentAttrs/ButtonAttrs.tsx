import { useReactive } from 'ahooks'
import { useEffect } from 'react'
import { useStore } from '@/app/store'
import { Form, Input, InputNumber, Select, Switch } from 'antd'
import { cloneDeep } from 'lodash-es'
import { LuPointer } from 'react-icons/lu'
import ChooseIcon from '../chooseIcon/ChooseIcon'

const ButtonAttrs = () => {
  const [form] = Form.useForm()
  const componentList = useStore(state => state.componentList)!
  const currentComponent = useStore(state => state.currentComponent)!
  const currentIndex = useStore(state => state.currentIndex)!
  const setComponentList = useStore(state => state.setComponentList)
  const setCurrentComponent = useStore(state => state.setCurrentComponent)

  const state = useReactive<{
    visible: boolean
  }>({
    visible: false,
  })

  const setVisible = (val: boolean) => {
    state.visible = val
  }

  const handleOk = (name: string) => {
    const arr = cloneDeep(componentList)
    ;(arr[currentIndex] as any).attrs['icon'] = name
    ;(currentComponent as any).attrs['icon'] = name
    setComponentList(cloneDeep(arr))
    setCurrentComponent(cloneDeep(currentComponent))
  }

  useEffect(() => {
    form.setFieldsValue(currentComponent)
  }, [currentComponent, form])

  return (
    <>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        autoComplete='off'
        form={form}
        onFieldsChange={values => {
          const value = values[0]
          const names = value.name
          if (names.length === 1) {
            ;(currentComponent as any)[names[0]] = value.value
          } else if (names.length === 2) {
            ;(currentComponent as any)[names[0]][names[1]] = value.value
          }
          setCurrentComponent(cloneDeep(currentComponent))
          const arr = cloneDeep(componentList)
          arr[currentIndex] = currentComponent
          setComponentList(cloneDeep(arr))
        }}
      >
        <Form.Item name='label' label='标题'>
          <Input placeholder='请输入标题'></Input>
        </Form.Item>
        <Form.Item name='labelCol' label='标签宽度'>
          <InputNumber min={0} max={24}></InputNumber>
        </Form.Item>
        <Form.Item name={['attrs', 'value']} label='按钮文字'>
          <Input placeholder='请输入按钮文字'></Input>
        </Form.Item>
        <Form.Item name={['attrs', 'type']} label='按钮类型'>
          <Select
            options={[
              {
                label: '默认按钮',
                value: 'default',
              },
              {
                label: '主要按钮',
                value: 'primary',
              },
              {
                label: '虚线按钮',
                value: 'dashed',
              },
              {
                label: '链接按钮',
                value: 'link',
              },
              {
                label: '文本按钮',
                value: 'text',
              },
            ]}
          ></Select>
        </Form.Item>
        <Form.Item name={['attrs', 'shape']} label='按钮形状'>
          <Select
            options={[
              {
                label: '默认',
                value: 'default',
              },
              {
                label: '圆角',
                value: 'round',
              },
              {
                label: '圆形',
                value: 'circle',
              },
            ]}
          ></Select>
        </Form.Item>
        <Form.Item name={['attrs', 'size']} label='按钮尺寸'>
          <Select
            options={[
              {
                label: '大',
                value: 'large',
              },
              {
                label: '中',
                value: 'middle',
              },
              {
                label: '小',
                value: 'small',
              },
            ]}
          ></Select>
        </Form.Item>
        <Form.Item name={['attrs', 'htmlType']} label='原生类型'>
          <Select
            options={[
              {
                label: '按钮',
                value: 'button',
              },
              {
                label: '提交',
                value: 'submit',
              },
              {
                label: '重置',
                value: 'reset',
              },
            ]}
          ></Select>
        </Form.Item>
        <Form.Item name={['attrs', 'block']} label='块级按钮' valuePropName='checked'>
          <Switch></Switch>
        </Form.Item>
        <Form.Item name={['attrs', 'danger']} label='危险按钮' valuePropName='checked'>
          <Switch></Switch>
        </Form.Item>
        <Form.Item name={['attrs', 'ghost']} label='幽灵按钮' valuePropName='checked'>
          <Switch></Switch>
        </Form.Item>
        <Form.Item name={['attrs', 'loading']} label='加载状态' valuePropName='checked'>
          <Switch></Switch>
        </Form.Item>
        <Form.Item name={['attrs', 'disabled']} label='是否禁用' valuePropName='checked'>
          <Switch></Switch>
        </Form.Item>
      </Form>
      <ChooseIcon visible={state.visible} setVisible={setVisible} onOk={handleOk}></ChooseIcon>
    </>
  )
}

export default ButtonAttrs
