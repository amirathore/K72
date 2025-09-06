import React from 'react'

const ProjectCard = (props) => {
    return (
        <>
            <div className='w-1/2 group transition-all relative  hover:rounded-[50px] overflow-hidden h-full'>
                <img className='h-full  w-full object-cover' src={props.img1} alt="no " />
                <div className='opacity-0 translate-all group-hover:opacity-100 absolute flex items-center justify-center top-0 left-0 w-full h-full  bg-black/30  '>
                    <h2 className='uppercase text-center border-2 rounded-full px-4 pt-2 border-white text-6xl font-[font2] text-white'>view project</h2>
                </div>
            </div>
            <div className='w-1/2 group transition-all relative  hover:rounded-[50px] overflow-hidden h-full'>
                <img className='h-full  w-full object-cover' src={props.img2} alt="no " />
                <div className='opacity-0 translate-all group-hover:opacity-100 absolute flex items-center justify-center top-0 left-0 w-full h-full  bg-black/30  '>
                    <h2 className='uppercase text-center border-2 rounded-full px-4 pt-2 border-white text-6xl font-[font2] text-white'>view project</h2>
                </div>
            </div>
        </>




    )
}

export default ProjectCard