
import Image from 'next/image'

export interface CardProps {
  icon: string;
  description: string;
}

function Card({description,icon}: CardProps) {
  return (
    <div
      className="rounded-lg border border-[#FA7436] mx-auto px-5 py-4 bg-white  drop-shadow-md transition hover:scale-110  hover:bg-[#fa7436a6] md:max-lg:min-w-[18rem] max-md:min-w-[20rem] max-lg:min-w-[24rem] lg:max-w-xs "
    >
      <Image
        className="relative max-sm:w-8 max-lg:mx-auto"
        src={icon}
        alt="img"
        width={48}
        height={48}
        priority
      />

      <p className={`mt-2 max-w-[30ch] text-lg opacity-70 max-sm:text-sm `}>
        {description}
      </p>
    </div>
  );
}

export default Card;