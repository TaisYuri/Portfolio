
import Image from 'next/image'


function Footer() {
  return (
    <div
      className="mx-auto py-4 md:max-lg:min-w-[18rem] max-md:min-w-[20rem] max-lg:min-w-[24rem] lg:max-w-md "
    >
      <div>
        <h1>Contatos</h1>
        <p>Entre com contato comigo através das minhas redes sociais abaixo</p>
      </div>

      <div className='flex flex-row'>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark m-auto"
          src='/javascript.svg'
          alt="img"
          width={60}
          height={37}
          priority
        />
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark m-auto"
          src='/javascript.svg'
          alt="img"
          width={60}
          height={37}
          priority
        />

        <Image
          className="mx-3"
          src='/javascript.svg'
          alt="img"
          width={60}
          height={37}
          priority
        />
      </div>

      <p className={`mt-2 text-lg opacity-70 `}>
        @2023  |  Designed e código por ❤ Tais Yuri ❤
      </p>
    </div>
  );
}

export default Footer;