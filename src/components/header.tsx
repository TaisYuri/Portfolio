import Image from 'next/image'

function Header() {
    return (
        <nav id="header" className="fixed w-full z-30 top-0 bg-gray-50 max-sm:ml-[-2rem]">
            <div className="w-full container flex flex-wrap items-center justify-between mt-0 py-2 mx-auto">
                <div className="pl-5 flex items-center">
                    <a className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                        <Image
                            className="max-sm:w-20 max-sm:h-9 max-lg:w-32 max-lg:h-10"
                            src="/logo.svg"
                            alt="logo"
                            width={180}
                            height={37}
                            priority
                        />
                    </a>
                </div>
                <div className="block lg:hidden pr-5">
                    <button id="nav-toggle" className="flex items-center p-1 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <svg className="fill-current h-7 w-7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3">
                        <a className="inline-block transform no-underline hover:text-gray-300 transition hover:scale-200 duration-300 ease-in-out py-2 px-4" href="#sobre">Sobre mim</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block transform no-underline hover:text-gray-300 transition hover:scale-200 duration-300 ease-in-out py-2 px-4" href="#habilidades">Habilidades</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block transform no-underline hover:text-gray-300 transition hover:scale-200 duration-300 ease-in-out py-2 px-4" href="#projetos">Projetos</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block transform no-underline hover:text-gray-300 transition hover:scale-200 duration-300 ease-in-out py-2 px-4" href="#contatos">Contatos</a>
                        </li>
                    </ul>
                    {/* <button
              id="navAction"
              className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Action
            </button> */}
                </div>
            </div>        
            <hr className="border-b border-gray-300 opacity-25 my-0 py-0" />
        </nav>
    );
}

export default Header;