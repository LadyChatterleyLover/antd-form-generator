'use client'

import { useStore } from '@/app/store'
import { Form, Input, InputNumber, Select, Switch } from 'antd'
import { cloneDeep } from 'lodash-es'
import { LuPointer } from 'react-icons/lu'
import ChooseIcon from '../chooseIcon/ChooseIcon'
import { useReactive } from 'ahooks'
import { useEffect } from 'react'

const InputAttrs = () => {
  const [form] = Form.useForm()
  const componentList = useStore(state => state.componentList)!
  const currentComponent = useStore(state => state.currentComponent)!
  const currentIndex = useStore(state => state.currentIndex)!
  const setComponentList = useStore(state => state.setComponentList)
  const setCurrentComponent = useStore(state => state.setCurrentComponent)

  const state = useReactive<{
    visible: boolean
    field: string
  }>({
    visible: false,
    field: '',
  })

  const setVisible = (val: boolean) => {
    state.visible = val
  }

  const handleOk = (name: string) => {
    const arr = cloneDeep(componentList)
    ;(arr[currentIndex] as any).attrs[state.field] = name
    ;(currentComponent as any).attrs[state.field] = name
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
        <Form.Item name='field' label='字段名'>
          <Input placeholder='请输入字段名'></Input>
        </Form.Item>
        <Form.Item name='label' label='标题'>
          <Input placeholder='请输入标题'></Input>
        </Form.Item>
        <Form.Item name={['attrs', 'placeholder']} label='占位提示'>
          <Input placeholder='请输入占位提示'></Input>
        </Form.Item>
        <Form.Item name='labelCol' label='标签宽度'>
          <InputNumber min={0} max={24}></InputNumber>
        </Form.Item>
        <Form.Item name={['attrs', 'value']} label='默认值'>
          <Input placeholder='请输入默认值'></Input>
        </Form.Item>
        <Form.Item name={['attrs', 'addonBefore']} label='前缀'>
          <Input placeholder='请输入前缀'></Input>
        </Form.Item>
        <Form.Item name={['attrs', 'addonAfter']} label='后缀'>
          <Input placeholder='请输入后缀'></Input>
        </Form.Item>
        <Form.Item name={['attrs', 'prefix']} label='前缀图标'>
          <Input
            placeholder='请输入前缀图标'
            addonAfter={
              <LuPointer
                className='cursor-pointer'
                onClick={() => {
                  state.field = 'prefix'
                  setVisible(true)
                }}
              ></LuPointer>
            }
          ></Input>
        </Form.Item>
        <Form.Item name={['attrs', 'suffix']} label='后缀图标'>
          <Input
            placeholder='请输入后缀图标'
            addonAfter={
              <LuPointer
                className='cursor-pointer'
                onClick={() => {
                  state.field = 'suffix'
                  setVisible(true)
                }}
              ></LuPointer>
            }
          ></Input>
        </Form.Item>
        <Form.Item name={['attrs', 'maxLength']} label='最多输入'>
          <Input placeholder='请输入字符长度' addonAfter='个字符'></Input>
        </Form.Item>
        <Form.Item name={['attrs', 'size']} label='尺寸'>
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
        <Form.Item name={['attrs', 'status']} label='校验状态'>
          <Select
            options={[
              {
                label: '无',
                value: '',
              },
              {
                label: '错误',
                value: 'error',
              },
              {
                label: '警告',
                value: 'warning',
              },
            ]}
          ></Select>
        </Form.Item>
        {currentComponent.type === 'search' ? (
          <Form.Item name={['attrs', 'enterButton']} label='确认按钮' valuePropName='checked'>
            <Switch></Switch>
          </Form.Item>
        ) : null}
        {currentComponent.type === 'password' ? (
          <Form.Item name={['attrs', 'visibilityToggle']} label='密码显隐' valuePropName='checked'>
            <Switch></Switch>
          </Form.Item>
        ) : null}
        {currentComponent.type === 'textarea' ? (
          <Form.Item name={['attrs', 'autoSize']} label='自适应内容' valuePropName='checked'>
            <Switch></Switch>
          </Form.Item>
        ) : null}
        <Form.Item name={['attrs', 'allowClear']} label='清除按钮' valuePropName='checked'>
          <Switch></Switch>
        </Form.Item>
        <Form.Item name={['attrs', 'bordered']} label='是否有边框' valuePropName='checked'>
          <Switch></Switch>
        </Form.Item>
        <Form.Item name={['attrs', 'showCount']} label='输入统计' valuePropName='checked'>
          <Switch></Switch>
        </Form.Item>
        <Form.Item name={['attrs', 'readOnly']} label='是否只读' valuePropName='checked'>
          <Switch></Switch>
        </Form.Item>
        <Form.Item name={['attrs', 'disabled']} label='是否禁用' valuePropName='checked'>
          <Switch></Switch>
        </Form.Item>
        <Form.Item name='required' label='是否必填' valuePropName='checked'>
          <Switch></Switch>
        </Form.Item>
      </Form>
      <ChooseIcon visible={state.visible} setVisible={setVisible} onOk={handleOk}></ChooseIcon>
    </>
  )
}

export default InputAttrs
