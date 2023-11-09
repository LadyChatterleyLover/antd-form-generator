'use client'

import { useEffect } from 'react'
import { useStore } from '@/app/store'
import { Form, Input, InputNumber, Select, Switch } from 'antd'
import { cloneDeep } from 'lodash-es'

const SelectAttrs = () => {
  const [form] = Form.useForm()
  const componentList = useStore(state => state.componentList)!
  const currentComponent = useStore(state => state.currentComponent)!
  const currentIndex = useStore(state => state.currentIndex)!
  const setComponentList = useStore(state => state.setComponentList)
  const setCurrentComponent = useStore(state => state.setCurrentComponent)

  useEffect(() => {
    form.setFieldsValue(currentComponent)
  }, [currentComponent, form])

  return (
    <>
      {currentComponent.value}
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
        <Form.Item name={['attrs', 'placeholder']} label='占位提示'>
          <Input placeholder='请输入默认值'></Input>
        </Form.Item>
        <Form.Item name='value' label='默认值'>
          <Input placeholder='请输入默认值'></Input>
        </Form.Item>
        <Form.Item name={['attrs', 'size']} label='模式'>
          <Select
            options={[
              {
                label: '默认',
                value: undefined,
              },
              {
                label: '多选',
                value: 'multiple',
              },
              {
                label: '标签',
                value: 'tags',
              },
            ]}
          ></Select>
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
        <Form.Item name={['attrs', 'placement']} label='弹出位置'>
          <Select
            options={[
              {
                label: '左下',
                value: 'bottomLeft',
              },
              {
                label: '右下',
                value: 'bottomRight',
              },
              {
                label: '左上',
                value: 'topLeft',
              },
              {
                label: '右上',
                value: 'topRight',
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
        <Form.Item name={['attrs', 'maxTagCount']} label='最多显示'>
          <InputNumber placeholder='请输入最多显示个数' controls min={1} style={{ width: '100%' }}></InputNumber>
        </Form.Item>
        <Form.Item name={['attrs', 'autoFocus']} label='自动聚焦' valuePropName='checked'>
          <Switch></Switch>
        </Form.Item>
        <Form.Item name={['attrs', 'allowClear']} label='清除按钮' valuePropName='checked'>
          <Switch></Switch>
        </Form.Item>
        <Form.Item name={['attrs', 'defaultActiveFirstOption']} label='高亮第一个' valuePropName='checked'>
          <Switch></Switch>
        </Form.Item>
        <Form.Item name={['attrs', 'filterOption']} label='可过滤' valuePropName='checked'>
          <Switch></Switch>
        </Form.Item>
        <Form.Item name={['attrs', 'showSearch']} label='可搜索' valuePropName='checked'>
          <Switch></Switch>
        </Form.Item>
        <Form.Item name={['attrs', 'virtual']} label='虚拟滚动' valuePropName='checked'>
          <Switch></Switch>
        </Form.Item>
        <Form.Item name={['attrs', 'loading']} label='加载状态' valuePropName='checked'>
          <Switch></Switch>
        </Form.Item>
        <Form.Item name={['attrs', 'bordered']} label='是否有边框' valuePropName='checked'>
          <Switch></Switch>
        </Form.Item>
        <Form.Item name={['attrs', 'disabled']} label='是否禁用' valuePropName='checked'>
          <Switch></Switch>
        </Form.Item>
        <Form.Item name='required' label='是否必填' valuePropName='checked'>
          <Switch></Switch>
        </Form.Item>
      </Form>
    </>
  )
}

export default SelectAttrs
