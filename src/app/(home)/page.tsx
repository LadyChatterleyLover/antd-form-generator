'use client'

import { Attributes, FunctionComponent, createElement, useEffect } from 'react'
import { AiOutlineCopy, AiOutlineDelete } from 'react-icons/ai'
import { useStore } from '../store'
import { Button, Form, Tooltip } from 'antd'
import { cloneDeep } from 'lodash-es'
import { ComponentItem } from '../types'
import { renderComponent } from '../utils/coomponent'

export default function Home() {
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
        <Form>
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
                {createElement(item.component!, item.attrs as Attributes)}
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
                        componentList.splice(index, 1)
                        setComponentList(cloneDeep(componentList))
                        let i = index
                        i--
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
