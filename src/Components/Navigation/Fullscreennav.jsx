import React, { useContext, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import NavContext, { NavBarContext } from '../../context/NavContext'

const Fullscreennav = () => {


  const fullNavLinks = useRef(null)
  const fullscreennav = useRef(null)

  const [navOpen, setNavOpen] = useContext(NavBarContext)
  console.log(navOpen)


function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: { amount: 0.3 }

        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navLink', {
            opacity: 1
        })
        tl.to('.fullscreennav', {
            display: 'none',
            
        })
    }


    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()
            

        }
    }, [navOpen])
 
  return (
    <div ref={fullscreennav} className='fullscreennav fixed h-screen z-50 overflow-hidden w-full text-white'>
      <div className='w-full h-full fixed'>
        <div className='h-screen w-full flex '>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
        </div>
      </div>
      <div ref={fullNavLinks} className='relative'>
        <div className='navLink flex p-3 w-full items-start justify-between'>
          <div className=''>
            <div className='w-[7.5vw]'>
              <svg className='w-full  text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                <path fill="white" fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
              </svg>
            </div>
          </div>
          <div onClick={()=>{
            setNavOpen(false)
          }} className='h-24 overflow-hidden w-24 relative cursor-pointer'>
            <div className='h-36 w-[2px] absolute -rotate-45 origin-top bg-white '></div>
            <div className='h-36 w-[2px] absolute rotate-45 origin-top right-0  bg-white'></div>
          </div>
        </div>
        <div className='py-10  '>
          <div className='link  relative  border-t-1 border-[gray] '>
            <h1 className='font-[font2] leading-[0.85] text-center pt-3 text-[8vw] uppercase'>Work</h1>
            <div className='moveLink flex  absolute bg-[#D3FD50] text-black top-[-0.5vw]'>
              <div className='moveX flex items-center '>
                <h2 className='whitespace-nowrap font-[font2] leading-[0.85] pt-3 text-center text-[8.2vw] uppercase' >See Everything</h2>
                <img className='h-[5.5vw] w-[15vw] shrink-0 rounded-full object-cover ' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] leading-[0.85] pt-3 text-center text-[8.2vw] uppercase'>See Everything</h2>
                <img className='h-[5.5vw] w-[15vw] shrink-0 rounded-full object-cover ' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
              </div>
              <div className='moveX flex items-center '>
                <h2 className='whitespace-nowrap font-[font2] leading-[0.85] pt-3 text-center text-[8.2vw] uppercase' >See Everything</h2>
                <img className='h-[5.5vw] w-[15vw] shrink-0 rounded-full object-cover ' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] leading-[0.85] pt-3 text-center text-[8.2vw] uppercase'>See Everything</h2>
                <img className='h-[5.5vw] w-[15vw] shrink-0 rounded-full object-cover ' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className='link  relative  border-t-1 border-[gray] '>
            <h1 className='font-[font2] leading-[0.85] text-center pt-3 text-[8.2vw] uppercase'>Agency</h1>
            <div className='moveLink flex  absolute bg-[#D3FD50] text-black top-[-0.5vw]'>
              <div className='moveX flex items-center '>
                <h2 className='whitespace-nowrap font-[font2] leading-[0.85] pt-3 text-center text-[8.2vw] uppercase' >Know us</h2>
                <img className='h-[5.5vw] w-[15vw] shrink-0 rounded-full object-cover ' src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] leading-[0.85] pt-3 text-center text-[8.2vw] uppercase'>Know us</h2>
                <img className='h-[5.5vw] w-[15vw] shrink-0 rounded-full object-cover ' src="https://k72.ca/uploads/teamMembers/MEL_640X290-640x290.jpg" alt="" />
              </div>
              <div className='moveX flex items-center '>
                <h2 className='whitespace-nowrap font-[font2] leading-[0.85] pt-3 text-center text-[8.2vw] uppercase' >Know us</h2>
                <img className='h-[5.5vw] w-[15vw] shrink-0 rounded-full object-cover ' src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] leading-[0.85] pt-3 text-center text-[8.2vw] uppercase'>Know us</h2>
                <img className='h-[5.5vw] w-[15vw] shrink-0 rounded-full object-cover ' src="https://k72.ca/uploads/teamMembers/MEL_640X290-640x290.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className='link  relative  border-t-1 border-[gray] '>
            <h1 className='font-[font2] leading-[0.85] text-center pt-3 text-[8.2vw] uppercase'>Contact</h1>
            <div className='moveLink flex  absolute bg-[#D3FD50] text-black top-[-0.5vw]'>
              <div className='moveX flex items-center '>
                <h2 className='whitespace-nowrap font-[font2] leading-[0.85] pt-3 text-center text-[8.2vw] uppercase' >send us a fax</h2>
                <img className='h-[5.5vw] w-[15vw] shrink-0 rounded-full object-cover ' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] leading-[0.85] pt-3 text-center text-[8.2vw] uppercase'>send us a fax</h2>
                <img className='h-[5.5vw] w-[15vw] shrink-0 rounded-full object-cover ' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
              </div>
              <div className='moveX flex items-center '>
                <h2 className='whitespace-nowrap font-[font2] leading-[0.85] pt-3 text-center text-[8.2vw] uppercase' >send us a fax</h2>
                <img className='h-[5.5vw] w-[15vw] shrink-0 rounded-full object-cover ' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] leading-[0.85] pt-3 text-center text-[8.2vw] uppercase'>send us a fax</h2>
                <img className='h-[5.5vw] w-[15vw] shrink-0 rounded-full object-cover ' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className='link  relative  border-t-1 border-b-1 border-[gray] '>
            <h1 className='font-[font2] leading-[0.85] text-center pt-3 text-[8.2vw] uppercase'>Blog</h1>
            <div className='moveLink flex  absolute bg-[#D3FD50] text-black top-[-0.5vw]'>
              <div className='moveX flex items-center '>
                <h2 className='whitespace-nowrap font-[font2] leading-[0.85] pt-3 text-center text-[8.2vw] uppercase' >read articlies</h2>
                <img className='h-[5.5vw] w-[15vw] shrink-0 rounded-full object-cover ' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" alt="" />
                <h2 className='whitespace-nowrap font-[font2] leading-[0.85] pt-3 text-center text-[8.2vw] uppercase'>read articlies</h2>
                <img className='h-[5.5vw] w-[15vw] shrink-0 rounded-full object-cover ' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
              </div>
              <div className='moveX flex items-center '>
                <h2 className='whitespace-nowrap font-[font2] leading-[0.85] pt-3 text-center text-[8.2vw] uppercase' >read articlies</h2>
                <img className='h-[5.5vw] w-[15vw] shrink-0 rounded-full object-cover ' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" alt="" />
                <h2 className='whitespace-nowrap font-[font2] leading-[0.85] pt-3 text-center text-[8.2vw] uppercase'>read articles</h2>
                <img className='h-[5.5vw] w-[15vw] shrink-0 rounded-full object-cover ' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fullscreennav