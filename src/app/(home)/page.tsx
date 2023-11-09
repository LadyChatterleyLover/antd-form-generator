'use client'

import { FunctionComponent, createElement, useEffect } from 'react'
import { AiOutlineCopy, AiOutlineDelete } from 'react-icons/ai'
import { useStore } from '../store'
import { Button, Form, Tooltip } from 'antd'
import { cloneDeep } from 'lodash-es'
import { ComponentItem } from '../types'
import { renderComponent } from '../utils/coomponent'
import * as Icons from '@ant-design/icons'
import type { InputProps } from 'antd'

export default function Home() {
  const [form] = Form.useForm()

  const componentList = useStore(state => {
    state.componentList?.map(item => {
      item.component = renderComponent(item.type) as FunctionComponent
    })
    return state.componentList
  })
  const currentIndex = useStore(state => state.currentIndex)
  const setComponentList = useStore(state => state.setComponentList)
  const setCurrentComponent = useStore(state => state.setCurrentComponent)
  const setCurrentIndex = useStore(state => state.setCurrentIndex)

  const renderChildren = (item: ComponentItem) => {
    if (item.type === 'button') {
      return item.attrs?.value
    }

    return null
  }

  useEffect(() => {
    componentList?.map(item => {
      form.setFieldValue(item.field, item.attrs?.value)
    })
  }, [componentList, form])

  return (
    <div
      className='h-full'
      onDrop={e => {
        const item = JSON.parse(e.dataTransfer!.getData('item')) as ComponentItem
        item.field = `${item.field}${Math.floor(Math.random() * 10000)}`
        if (componentList?.length) {
          const arr = cloneDeep(componentList)
          arr.push(item)
          setComponentList(cloneDeep(arr))
          setCurrentIndex(arr.length - 1)
          setCurrentComponent(arr[arr.length - 1])
        } else {
          const arr: ComponentItem[] = []
          arr.push(item)
          setComponentList(cloneDeep(arr))
          setCurrentIndex(0)
          setCurrentComponent(item)
        }
      }}
      onDragOver={e => {
        e.preventDefault()
      }}
    >
      {componentList?.length ? (
        <Form form={form} name='componentList'>
          {componentList.map((item, index) => (
            <div
              key={item.field}
              className={`relative flex items-center py-3 px-2 mb-4 hover:bg-[#f6f7ff] ${
                Number(currentIndex) === index ? 'bg-[#f6f7ff] rounded-md' : ''
              }`}
              onClick={() => {
                setCurrentComponent(item)
                setCurrentIndex(index)
              }}
            >
              <Form.Item
                name={item.field}
                label={item.label}
                labelCol={{ span: item.labelCol }}
                wrapperCol={{ span: 24 - (item.labelCol || 6) }}
                style={{ width: '100%', marginBottom: 0 }}
                required={item.required}
              >
                {createElement(item.component!, {
                  ...item.attrs,
                  prefix: (item.attrs as InputProps)?.prefix ? (
                    createElement((Icons as any)[(item.attrs as InputProps)?.prefix as string])
                  ) : (
                    <span></span>
                  ),
                  suffix: (item.attrs as InputProps)?.suffix ? (
                    createElement((Icons as any)[(item.attrs as InputProps)?.suffix as string])
                  ) : (
                    <span></span>
                  ),
                  options: item.type === 'select' ? item.children?.map(child => child.attrs) : null,
                  children: renderChildren(item),
                } as any)}
              </Form.Item>
              {Number(currentIndex) === index ? (
                <div className='flex items-center gap-x-4 absolute top-[-5px] right-2 z-10'>
                  <Tooltip title='复制' placement='bottomRight'>
                    <Button
                      type='primary'
                      shape='circle'
                      size='small'
                      className='flex items-center justify-center'
                      icon={<AiOutlineCopy className='text-base'></AiOutlineCopy>}
                      onClick={e => {
                        e.stopPropagation()
                        const arr = cloneDeep(componentList)
                        const cloneItem = cloneDeep(item)
                        cloneItem.field = `${item.field}${Math.floor(Math.random() * 10000)}`
                        arr.push(cloneItem)
                        setComponentList(cloneDeep(arr))
                        setCurrentIndex(arr.length - 1)
                      }}
                    ></Button>
                  </Tooltip>
                  <Tooltip title='删除' placement='bottomRight'>
                    <Button
                      danger
                      shape='circle'
                      size='small'
                      className='flex items-center justify-center'
                      icon={<AiOutlineDelete className='text-base'></AiOutlineDelete>}
                      onClick={e => {
                        e.stopPropagation()
                        const arr = cloneDeep(componentList)
                        arr.splice(index, 1)
                        let i = index
                        i--
                        setComponentList(cloneDeep(arr))
                        setCurrentComponent(arr[i] ?? null)
                        setCurrentIndex(i)
                      }}
                    ></Button>
                  </Tooltip>
                </div>
              ) : null}
            </div>
          ))}
        </Form>
      ) : (
        <div className='flex items-center justify-center h-[70%] w-full text-[#ccb1ea] text-2xl'>
          从左侧拖入或点选组件进行表单设计
        </div>
      )}
    </div>
  )
}
