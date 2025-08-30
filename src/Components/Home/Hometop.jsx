import React from 'react'
import Video from './Video'

const Hometop = () => {
    return (
        <div className='font-[font1] text-center  text-white'>
            <div className='text-[9.5vw] uppercase leading-[9vw] justify-center flex items-center'>The spark for</div>
            <div className='text-[9.5vw] uppercase leading-[9vw] justify-center flex items-center '>
                all
                <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden'>
                <Video />
                </div>
                things</div>
            <div className='text-[9.5vw] uppercase leading-[9vw] justify-center flex items-center'>creative</div>
        </div>
    )
}

export default Hometop