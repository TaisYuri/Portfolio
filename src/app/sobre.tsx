import Image from "next/image";

function Sobre() {
  return (
    <div className="container mx-auto" id="sobre">
      <div className="md:grid md:grid-cols-2 md:gap-x-4 lg:gap-x-8 items-center">
        <section className="flex flex-col  mt-16 mb-8 md:mb-10 ">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
            Olá! Me chamo
          </h1>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-tight md:pr-8 text-slate-300">
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

        <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
          
            <div className="text-lg leading-relaxed mb-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
                dubitas igitur mutare principia naturae?&nbsp;Ita multo sanguine
                profuso in laetitia et in victoria est mortuus. Omnia contraria,
                quos etiam insanos esse vultis.&nbsp;Hinc ceteri particulas
                arripere conati suam quisque videro voluit afferre
                sententiam.&nbsp;Quis non odit sordidos, vanos, leves, futtiles?
                Quasi ego id curem, quid ille aiat aut neget.
              </p>
            </div>
            
        </div>
        <div className="px-3 py-2 border-2 border-spacing-3 rounded-md bg-stone-500 max-w-max">
            <h3 className="text-lg lg:text-base leading-tight">
              <a className="hover:underline" href="/">
                From Server-side Rendering to Static Generation
              </a>
            </h3>
          </div>
      </section>
    </div>
  );
}

export default Sobre;
