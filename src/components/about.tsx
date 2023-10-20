import Image from "next/image";

function About() {
  return (
    <div className="container mx-auto animate-fade-right animate-duration-[3000ms]" id="sobre">
      <div className="md:grid md:grid-cols-2 md:gap-x-4 lg:gap-x-8 items-center">
        <section className="flex flex-col  mt-16 mb-8 md:mb-10 ">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
            Olá! Me chamo
          </h1>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-tight md:pr-8 text-[#FA7436]">
            Tais Yuri
          </h1>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
            e este é meu mundo DEV.
          </h1>

          <h1 className="mt-8 text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
            Então, seja muito bem vindo(a)!
          </h1>
        </section>
        <div className="">
          <Image
            className="max-w-max my-2 mx-4 max-sm:w-46 max-lg:w-80 max-md:mx-auto"
            src="/photo.png"
            alt="img"
            width={640}
            height={237}
            priority
          />
        </div>
      </div>
      <section>

        <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-4 max-sm:mb-3">

          <div className="text-lg leading-relaxed">
            <p>
              Desenvolvedora Front-end com orgulho
              Sempre buscando me aperfeiçoar e trazer a melhor e mais bonita aplicação!
            </p>
          </div>

        </div>
        <div className="px-3 py-2 border-2 border-spacing-3 rounded-md border-[#FA7436] mb-6 max-w-max max-sm:mx-auto">
          <h3 className="text-lg lg:text-base leading-tight text-center">
            <a className="text-[#FA7436] hover:underline" href="#projetos">
             Conheça Meus Projetos
            </a>
          </h3>
        </div>
      </section>
    </div>
  );
}

export default About;
