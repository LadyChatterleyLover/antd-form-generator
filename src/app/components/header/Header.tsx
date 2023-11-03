import { useStore } from '@/app/store'
import { Button, Modal } from 'antd'
import {
  AiFillGithub,
  AiOutlinePlayCircle,
  AiOutlineEye,
  AiOutlineDownload,
  AiOutlineCopy,
  AiOutlineDelete,
} from 'react-icons/ai'
import { ExclamationCircleFilled } from '@ant-design/icons'

const { confirm } = Modal

const Header = () => {
  const setComponentList = useStore(state => state.setComponentList)
  const setCurrentComponent = useStore(state => state.setCurrentComponent)
  const setCurrentIndex = useStore(state => state.setCurrentIndex)
  return (
    <div className='h-full flex items-center justify-between px-5'>
      <div className='flex items-center gap-x-5'>
        <div className='text-xl text-[#00afff] font-bold'>antd-form-generator</div>
        <div
          className='flex items-center cursor-pointer'
          onClick={() => {
            window.open('https://github.com/LadyChatterleyLover/antd-form-generator', '_blank')
          }}
        >
          <AiFillGithub className='text-2xl'></AiFillGithub>
        </div>
      </div>
      <div className='flex items-center'>
        <Button
          className='flex items-center'
          type='link'
          icon={<AiOutlinePlayCircle className='text-xl'></AiOutlinePlayCircle>}
        >
          运行
        </Button>
        <Button className='flex items-center' type='link' icon={<AiOutlineEye className='text-xl'></AiOutlineEye>}>
          查看json
        </Button>
        <Button
          className='flex items-center'
          type='link'
          icon={<AiOutlineDownload className='text-xl'></AiOutlineDownload>}
        >
          下载
        </Button>
        <Button className='flex items-center' type='link' icon={<AiOutlineCopy className='text-xl'></AiOutlineCopy>}>
          复制代码
        </Button>
        <Button
          className='flex items-center'
          type='link'
          danger
          icon={<AiOutlineDelete className='text-xl'></AiOutlineDelete>}
          onClick={() => {
            confirm({
              title: '确定要清空所有组件吗？',
              icon: <ExclamationCircleFilled />,
              onOk() {
                setComponentList(null)
                setCurrentComponent(null)
                setCurrentIndex(null)
                localStorage.removeItem('componentList')
                localStorage.removeItem('currentComponent')
                localStorage.removeItem('currentIndex')
              },
            })
          }}
        >
          清空
        </Button>
      </div>
    </div>
  )
}

export default Header
