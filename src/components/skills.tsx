'use client'
import Image from 'next/image'
import { useCallback, useState } from 'react';

export interface SkillsProps {
  icon: string;
  description: string;
  skills: {
    id: number;
    skill: string;
  }[]

}

function Skills({ description, icon,skills }: SkillsProps) {
  
  const [tagId, setTagId] = useState(1)

  const renderImage = useCallback((id: number)=> {
    const image: {[key:number]: string} = {
      1 : "undraw_projections.svg",
      2: "/undraw_just_saying.svg",
      3: "/undraw_summer.svg",
      4: "/undraw_landscape_photographer.svg",
      5: "/undraw_with_love.svg",
      6:"/undraw_engineering_team.svg",
      7:"/undraw_programmer.svg",
      8:"/undraw_landscape_photographer.svg",
    }
    return image[id]
  },[])

  return (
    <div className="flex flex-1 mt-8 items-center" >
      <div className=' '>
        <Image
        className="relative m-auto max-h-60 "
        src={renderImage(tagId)}
        alt="img"
        width={260}
        height={37}
        priority
      />
        <p className={`mt-2 max-w-[30ch] text-lg opacity-70 `}>
          {description}
        </p>
      </div>
      <div className=''>
        <div className='grid text-center gap-3 md:grid-cols-2 ml-7'>
          {skills.map( item => 
          <div key={item.id} onMouseOver={() => setTagId(item.id)} className='border border-transparent rounded-md mx-3 px-5 py-4 bg-[#FA7436] text-white'>{item.skill}</div>
            )}
         
        </div>
      </div>
    </div>
  );
}

export default Skills;

//rounded-lg border border-transparent mx-3 px-5 py-4 bg-[#FA7436] transition hover:scale-110 md:max-lg:min-w-[12rem] max-md:min-w-[14rem] max-lg:min-w-[18rem] lg:max-w-xs 