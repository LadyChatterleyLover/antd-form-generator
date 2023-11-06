import { useStore } from '@/app/store'
import { Result } from 'antd'
import InputAttrs from '../componentAttrs/InputAttrs'

const ComponentAttrs = () => {
  const currentComponent = useStore(state => state.currentComponent)
  return currentComponent ? (
    <div className='p-[10px] overflow-hidden'>
      <div className='overflow-y-auto'>{currentComponent.type === 'input' ? <InputAttrs></InputAttrs> : null}</div>
    </div>
  ) : (
    <Result status='404' title='请先拖拽组件至编辑区域'></Result>
  )
}

export default ComponentAttrs
