import { useStore } from '@/app/store'
import { ComponentType } from '@/app/types'
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Button, Divider, Input } from 'antd'
import { OptionProps } from 'antd/es/select'
import { cloneDeep } from 'lodash-es'

const ComponentChildren: React.FC<{ type: ComponentType }> = ({ type }) => {
  const componentList = useStore(state => state.componentList)!
  const currentComponent = useStore(state => state.currentComponent)!
  const currentIndex = useStore(state => state.currentIndex)!
  const setComponentList = useStore(state => state.setComponentList)
  const setCurrentComponent = useStore(state => state.setCurrentComponent)

  return (
    <>
      <Divider>选项</Divider>
      <div className='mb-4'>
        {currentComponent.children!.map((item, index) => (
          <div key={item.attrs?.value} className='flex items-center gap-x-3 mb-3'>
            <Input
              value={(item.attrs as OptionProps).label}
              onChange={e => {
                const value = e.target.value
                const arr = cloneDeep(componentList)
                ;(currentComponent.children![index].attrs as OptionProps).label = value
                arr[currentIndex] = cloneDeep(currentComponent)
                setComponentList(cloneDeep(arr))
                setCurrentComponent(cloneDeep(currentComponent))
              }}
            ></Input>
            <Input
              value={(item.attrs as OptionProps).value}
              onChange={e => {
                const value = e.target.value
                const arr = cloneDeep(componentList)
                ;(currentComponent.children![index].attrs as OptionProps).value = value
                arr[currentIndex] = cloneDeep(currentComponent)
                setComponentList(cloneDeep(arr))
                setCurrentComponent(cloneDeep(currentComponent))
              }}
            ></Input>
            <MinusCircleOutlined
              className='text-[#f56c6c] text-2xl cursor-pointer'
              onClick={() => {
                const arr = cloneDeep(componentList)
                currentComponent.children!.splice(index, 1)
                arr[currentIndex].children!.splice(index, 1)
                setComponentList(cloneDeep(arr))
                setCurrentComponent(cloneDeep(currentComponent))
              }}
            ></MinusCircleOutlined>
          </div>
        ))}
      </div>
      <Button
        type='link'
        icon={<PlusCircleOutlined></PlusCircleOutlined>}
        onClick={() => {
          const arr = cloneDeep(componentList)
          currentComponent.children!.push({
            attrs: {
              label: `选项${arr[currentIndex].children!.length + 1}`,
              value: arr[currentIndex].children!.length + 1,
            },
            type,
          })
          arr[currentIndex].children!.push({
            attrs: {
              label: `选项${arr[currentIndex].children!.length + 1}`,
              value: arr[currentIndex].children!.length + 1,
            },
            type,
          })
          setComponentList(cloneDeep(arr))
          setCurrentComponent(cloneDeep(currentComponent))
        }}
      >
        添加选项
      </Button>
      <Divider></Divider>
    </>
  )
}

export default ComponentChildren
