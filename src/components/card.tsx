
import Image from 'next/image'

export interface CardProps {
  icon: string;
  description: string;
}

function Card({description,icon}: CardProps) {
  return (
    <div
      className="rounded-lg border border-transparent mx-auto px-5 py-4 bg-white transition hover:scale-110 max-md:min-w-[20rem] max-lg:min-w-[24rem] lg:max-w-md "
    >
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark m-auto"
        src={icon}
        alt="img"
        width={160}
        height={37}
        priority
      />

      <p className={`mt-2 max-w-[30ch] text-lg opacity-70 `}>
        {description}
      </p>
    </div>
  );
}

export default Card;