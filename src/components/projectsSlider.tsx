
'use client'
import Image from 'next/image'
import { useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export interface ProjectProps {
  icon: string;
  description: string;
}

function ProjectSlider() {

  return (
    <div className='flex bg-slate-600 w-96'>

      <Swiper
        spaceBetween={150}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={true} modules={[Pagination]}

      >
        <SwiperSlide>
          <div>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark m-auto"
              src={"/design-responsivo.png"}
              alt="img"
              width={160}
              height={37}
              priority
            />
            <p className="legend">Legend 2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark m-auto"
              src={"/design-responsivo.png"}
              alt="img"
              width={160}
              height={37}
              priority
            />
            <p className="legend">Legend 2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark m-auto"
              src={"/design-responsivo.png"}
              alt="img"
              width={160}
              height={37}
              priority
            />
            <p className="legend">Legend 2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark m-auto"
              src={"/design-responsivo.png"}
              alt="img"
              width={160}
              height={37}
              priority
            />
            <p className="legend">Legend 2</p>
          </div>
        </SwiperSlide>
      </Swiper>

      

    </div>
  );
}

export default ProjectSlider;