
import Image from 'next/image'

export interface AbilitiesItem {
    icon: string;
    nameTecnology: string;
}

export interface AbilitiesProps {
    data: AbilitiesItem[]
}

function Abilities({ data }: AbilitiesProps) {
    return (
        <div
            className="flex flex-row rounded-xl px-5 py-4 bg-white drop-shadow-md transition  max-md:min-w-[20rem] max-lg:min-w-[24rem] lg:max-w-md "
        >
            {data?.map(item =>
                <div className='mx-4'>
                    <Image
                        className="relative dark m-auto max-sm:w-7 max-sm:h-7"
                        src={item.icon}
                        alt="img"
                        width={50}
                        height={37}
                        priority
                    />
                    <p className={`mt-2 max-w-[30ch] text-sm text-center opacity-70  text-neutral-600 max-sm:text-[10px]`}>
                        {item.nameTecnology}
                    </p>
                </div>
            )}
        </div>
    );
}

export default Abilities;