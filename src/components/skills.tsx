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
  
  const [tagId, setTagId] = useState(0)

  const renderImage = useCallback((id: number)=> {
    const image: {[key:number]: string} = {
      1 : "/icon-figma.svg",
      2: "/icon-css3.svg",
      3: "/icon-python.svg",
      4: "/design-responsivo.png",
      5: "/design-responsivo.png",
      6:"/icon-figma.svg"
    }
    return image[id]
  },[])

  return (
    <div
      className="flex flex-1"
    >
      <div className='bg-red-300'>
        <Image
        className="relative m-auto"
        src={renderImage(tagId)}
        alt="img"
        width={160}
        height={37}
        priority
      />
        <p className={`mt-2 max-w-[30ch] text-lg opacity-70 `}>
          {description}
        </p>
      </div>
      <div className='bg-yellow-300'>
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