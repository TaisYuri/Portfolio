
'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { ProjectProps } from '@/data/projects';

export interface ProjectSchema{
  projects: ProjectProps[]
}
function ProjectSliderEffect({ projects }:ProjectSchema) {

  return (
    <div className='max-w-2xl mt-8 rounded-xl drop-shadow-md border border-transparent  px-5 py-4 bg-white'>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {projects.map(project =>
          <SwiperSlide key={project.title}>
            <div  className='flex'>
              <Image
                className="relative ml-3"
                src={project.image}
                alt="img"
                width={160}
                height={37}
                priority
              />
              <div className='max-w-md'>
                <h2 className="text-xl leading-10 font-bold text-center">{project.title}</h2>
                <p className="mt-2">{project.description}</p>
                <div className='mt-8 flex'>
                  {project.tags?.map(item =>
                    <div key={item} className='ml-3 bg-slate-500 rounded-xl py-2 px-3 text-sm'>{item}</div>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>



    </div>
  );
}

export default ProjectSliderEffect;