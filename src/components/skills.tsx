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
      1: "/undraw_projections.svg",
      2: "/undraw_just_saying.svg",
      3: "/undraw_summer.svg",
      4: "/undraw_landscape_photographer.svg",
      5: "/undraw_with_love.svg",
      6: "/undraw_engineering_team.svg",
      7: "/undraw_programmer.svg",
      8: "/undraw_landscape_photographer.svg",
    }
    return image[id]
  },[])

  const renderDescription = useCallback((id: number)=> {
    const description: {[key:number]: string} = {
      1: "Gosto de fazer as coisas muito bem feitas, buscando meu melhor!",
      2: "A melhor forma de se expressar, ainda mais se for para auxiliar o próximo.",
      3: "Sempre fui facinada por estudos, por aprender algo novo e isto tem ajudado a aprender bastante.",
      4: "Lorem ipsulum",
      5: "É muito bom quando podemos crescer e evoluir dentro da empresa",
      6:"/undraw_engineering_team.svg",
      7:"/undraw_programmer.svg",
      8:"/undraw_landscape_photographer.svg",
    }
    return description[id]
  },[])

  return (
    <div className="flex mt-8 mb-8 items-center max-sm:flex-col" >
      <div className='h-80 w-[22rem] flex flex-col justify-between text-center max-sm:justify-start max-sm:h-60 max-sm:contents'>
        <Image
        className="relative mx-auto max-sm:w-44"
        src={renderImage(tagId)}
        alt="img"
        width={260}
        height={37}
        priority
      />
        <p className={`mt-2 max-w-[42ch] text-lg opacity-70 max-sm:text-base`}>
          {renderDescription(tagId)}
        </p>
      </div>
      <div className=''>
        <div className='grid text-center gap-3 max-md:grid-cols-2 ml-7 max-sm:ml-0 max-sm:gap-2'>
          {skills.map( item => 
          <div key={item.id} onMouseOver={() => setTagId(item.id)} className='border border-transparent rounded-md mx-3 px-5 py-4 bg-[#FA7436] text-white max-sm:mx-0 max-sm:text-sm'>{item.skill}</div>
            )}
         
        </div>
      </div>
    </div>
  );
}

export default Skills;

//rounded-lg border border-transparent mx-3 px-5 py-4 bg-[#FA7436] transition hover:scale-110 md:max-lg:min-w-[12rem] max-md:min-w-[14rem] max-lg:min-w-[18rem] lg:max-w-xs 