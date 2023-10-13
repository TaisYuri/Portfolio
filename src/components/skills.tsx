
import Image from 'next/image'

export interface SkillsProps {
  icon: string;
  description: string;
}

function Skills({description,icon}: SkillsProps) {
  return (
    <div
      className="rounded-lg border border-transparent mx-3 px-5 py-4 bg-[#FA7436] transition hover:scale-110 md:max-lg:min-w-[12rem] max-md:min-w-[14rem] max-lg:min-w-[18rem] lg:max-w-xs "
    >
      {/* <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark m-auto"
        src={icon}
        alt="img"
        width={160}
        height={37}
        priority
      /> */}

      <p className={`mt-2 max-w-[30ch] text-lg opacity-70 `}>
        {description}
      </p>
    </div>
  );
}

export default Skills;