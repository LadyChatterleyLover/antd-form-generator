import { Button } from 'antd'
import {
  AiFillGithub,
  AiOutlinePlayCircle,
  AiOutlineEye,
  AiOutlineDownload,
  AiOutlineCopy,
  AiOutlineDelete,
} from 'react-icons/ai'

const Header = () => {
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
        >
          清空
        </Button>
      </div>
    </div>
  )
}

export default Header
