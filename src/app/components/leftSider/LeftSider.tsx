import { componentList } from '@/app/config'
import { createElement } from 'react'

const LeftSider = () => {
  return (
    <div className='p-3'>
      <div className='flex flex-wrap gap-3'>
        {componentList.map((item, index) => (
          <div
            key={index}
            className='w-[44%] m-[1%] cursor-move'
            draggable
            onDragStart={e => {
              e.dataTransfer!.setData('item', JSON.stringify(item))
            }}
          >
            <div className='flex items-center gap-x-2 py-2 px-[10px] bg-[#f6f7ff] border border-dashed border-[#f6f7ff]  rounded'>
              <div className='text-base h-full flex items-center'>{createElement(item.icon!)}</div>
              <div className='h-full flex items-center'>{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeftSider
