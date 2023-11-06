import { useStore } from '@/app/store'
import { Result } from 'antd'
import InputAttrs from '../componentAttrs/InputAttrs'
import ButtonAttrs from './ButtonAttrs'

const ComponentAttrs = () => {
  const currentComponent = useStore(state => state.currentComponent)
  return currentComponent ? (
    <div className='p-[10px] overflow-hidden'>
      <div className='overflow-y-auto'>
        {currentComponent.type === 'input' ||
        currentComponent.type === 'password' ||
        currentComponent.type === 'search' ||
        currentComponent.type === 'textarea' ? (
          <InputAttrs></InputAttrs>
        ) : null}
        {currentComponent.type === 'button' ? <ButtonAttrs></ButtonAttrs> : null}
      </div>
    </div>
  ) : (
    <Result status='404' title='请先拖拽组件至编辑区域'></Result>
  )
}

export default ComponentAttrs
