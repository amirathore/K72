import React from 'react'
import { Link } from 'react-router-dom'

const Homebottom = () => {
  return (
    <div className='font-[font2]  text-white flex items-center gap-2 justify-center '>
      <div className='border-3  leading-[4.8vw] hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full uppercase flex px-6  '>
        <Link className='text-[6.5vw] mt-6' to='/project'>Work</Link>
      </div>
      <div className='border-3 leading-[4.8vw]  hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full uppercase flex px-6 '>
        <Link className='text-[6.5vw] mt-6' to='/agence'>Agency</Link>
      </div>
     
    </div>
  )
}

export default Homebottom