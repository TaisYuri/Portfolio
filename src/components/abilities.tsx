
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
            className="flex flex-row rounded-xl px-5 py-4 mb-4 mr-4 bg-white drop-shadow-md transition max-sm:min-w-[10rem] max-md:min-w-[20rem] max-lg:min-w-[13rem] "
        >
            {data?.map(item =>
                <div className='mx-3 max-sm:mx-2'>
                    <Image
                        className="relative dark m-auto max-sm:w-9 max-sm:h-9 max-lg:w-10 max-lg:h-10"
                        src={item.icon}
                        alt="img"
                        width={50}
                        height={37}
                        priority
                    />
                    <p className={`mt-2 text-sm text-center max-w-[3rem] opacity-70 text-neutral-600 max-sm:text-[0.675rem] max-lg:text-xs`}>
                        {item.nameTecnology}
                    </p>
                </div>
            )}
        </div>
    );
}

export default Abilities;