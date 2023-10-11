
import Image from 'next/image'


function Footer() {
  return (
    <div
      className='flex flex-col max-sm:w-[18rem]'
    >
      
      <div className='text-center mt-8'>
        <h1 className='text-2xl leading-10 font-bold'>Contatos</h1>
          <p className={`text-lg opacity-50 leading-8`}>
          Entre com contato comigo através das minhas redes sociais abaixo
          </p>
      </div>

      <div className='flex flex-row justify-center '>
        <Image
          className="my-2 mx-4 max-sm:w-9 max-sm:h-9 max-lg:w-10 max-lg:h-10"
          src='/javascript.svg'
          alt="img"
          width={40}
          height={37}
          priority
        />
        <Image
          className="my-2 mx-4 max-sm:w-9 max-sm:h-9 max-lg:w-10 max-lg:h-10"
          src='/javascript.svg'
          alt="img"
          width={40}
          height={37}
          priority
        />

        <Image
          className="my-2 mx-4 max-sm:w-9 max-sm:h-9 max-lg:w-10 max-lg:h-10"
          src='/javascript.svg'
          alt="img"
          width={40}
          height={37}
          priority
        />
      </div>

      <p className={`mt-6 opacity-70 text-center`}>
        2023 | Designed e código por ❤ Tais Yuri ❤
      </p>
    </div>
  );
}

export default Footer;