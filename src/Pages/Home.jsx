import React from 'react'
import Video from '../Components/Home/Video'
import Hometop from '../Components/Home/Hometop'
import Homebottom from '../Components/Home/Homebottom'

export const Home = () => {
  return (
    <div>
        <div className='h-screen w-screen fixed '>
           <Video/>
        </div>
        <div className='h-screen w-screen flex flex-col pb-5 overflow-hidden justify-between  relative'>
            <Hometop/>
            <Homebottom/>
        </div>

    </div>
  )
}