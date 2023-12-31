
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
        id='habilidades'

            className="flex flex-row items-end rounded-xl px-5 py-4 mb-4 mr-4 bg-white drop-shadow-md transition min-w-[15rem] max-sm:min-w-[10rem] max-md:min-w-[20rem] max-lg:min-w-[11rem]"
        >
            {data?.map(item =>
                <div key={item.nameTecnology} className='mx-3 max-sm:mx-2'>
                    <Image
                        className="relative dark m-auto max-h-12 max-sm:w-9 max-sm:h-9 max-lg:w-10 max-lg:h-10"
                        src={item.icon}
                        alt="img"
                        width={50}
                        height={37}
                        priority
                    />
                    <p className={`mt-2 text-sm text-center max-w-[3rem] whitespace-nowrap opacity-70 text-neutral-600 max-sm:text-[0.675rem] max-lg:text-xs`}>
                        {item.nameTecnology}
                    </p>
                </div>
            )}
        </div>
    );
}

export default Abilities;