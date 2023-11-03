'use client'

import { Modal } from 'antd'
import { useReactive } from 'ahooks'
import * as Icons from '@ant-design/icons'
import { ReactNode, createElement } from 'react'

interface Props {
  visible: boolean
  setVisible: (val: boolean) => void
  onOk: (name: string) => void
}

const ChooseIcon: React.FC<Props> = ({ visible, setVisible, onOk }) => {
  const state = useReactive({
    name: '',
  })
  return (
    <Modal
      title='选择图标'
      width='50%'
      open={visible}
      onOk={() => {}}
      onCancel={() => {
        setVisible(!visible)
      }}
    >
      <div className='flex flex-wrap  gap-y-4 chooseIcon'>
        {Object.keys(Icons).map((item, index) =>
          item !== 'default' &&
          item !== 'createFromIconfontCN' &&
          item !== 'getTwoToneColor' &&
          item !== 'setTwoToneColor' ? (
            <div
              key={index}
              className='w-[20%] flex flex-col justify-center items-center cursor-pointer'
              onClick={() => {
                state.name = item
                onOk(state.name)
                setVisible(!visible)
              }}
            >
              <div>{createElement((Icons as any)[item])}</div>
              <div>{item}</div>
            </div>
          ) : null
        )}
      </div>
    </Modal>
  )
}

export default ChooseIcon
