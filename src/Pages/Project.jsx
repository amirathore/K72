  import React from 'react'
  import ProjectCard from '../Components/Projects/ProjectCard'
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { useGSAP } from '@gsap/react'

  export const Project = () => {

    const projects = [
      {
        image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
        image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
      },
      {
        image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
        image2: 'https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg'
      },
      {
        image1: 'https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg',
        image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
      },
      {
        image1: 'https://k72.ca/uploads/caseStudies/BEST/BEST_site_Thumbnail-1280x960.jpg',
        image2: 'https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg'
      },
      {
        image1: 'https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg',
        image2: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg'
      },
      {
        image1: 'https://k72.ca/uploads/caseStudies/OSM/thumbnailimage_OSM-1280x960.jpg',
        image2: 'https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg'
      },
      {
        image1: 'https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg',
        image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
      },
      {
        image1: 'https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg',
        image2: 'https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg'
      },
    ]

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
      gsap.from('.hero', {
        height: '100px',
        stagger: { amount: 0.9 },
        scrollTrigger: {
          trigger: '.lol',
          start: 'top 78%',
          end: 'top -130%',
          scrub: true,
          markers: true
        }
      })
    })

    return (
      <div className='p-4'>
        <div className='pt-[40vh]'>
          <h2 className='text-[13vw] font-[font2] uppercase'>Work</h2>
        </div>
        <div className='-mt-20 lol'>
          {projects.map((elem, index) => (
            <div key={index} className='hero w-full h-[550px] mb-4 flex gap-3'>
              <ProjectCard img1={elem.image1} img2={elem.image2} />
            </div>
          ))}
        </div>
      </div>
    )
  }
