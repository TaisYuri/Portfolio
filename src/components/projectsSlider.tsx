
'use client'
import Image from 'next/image'
import { useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { ProjectProps } from '@/data/projects';

export interface ProjectSchema{
  projects: ProjectProps[]
}

function ProjectSlider({ projects }:ProjectSchema) {

  return (
    <div className='max-w-6xl mt-8 mx-auto rounded-xl drop-shadow-md border border-transparent px-3 py-4 bg-white max-sm:max-w-[22rem] max-lg:max-w-[45rem]'>

      <Swiper
        spaceBetween={120}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={true} modules={[Pagination]}

      >
        {projects.map(project =>
          <SwiperSlide key={project.title}>
            <div  className='flex max-sm:flex-col max-sm:items-center lg:justify-center'>
              <Image
                className="relative ml-3"
                src={project.image}
                alt="img"
                width={160}
                height={37}
                priority
              />
              <div className='max-w-md max-sm:pb-8 lg:max-w-xl lg:ml-3'>
                <h2 className="text-xl leading-10 font-bold text-center lg:text-2xl">{project.title}</h2>
                <p className="mt-2 lg:text-lg">{project.description}</p>
                <div className='mt-8 flex max-sm:mt-2'>
                  {project.tags?.map(item =>
                    <div key={item} className='ml-3 bg-slate-500 rounded-xl py-2 px-3 text-sm max-sm:text-xs max-sm:px-2 lg:text-base'>{item}</div>
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

export default ProjectSlider;