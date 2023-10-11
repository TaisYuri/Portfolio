import Header from '@/components/header'
import Image from 'next/image'
import Sobre from './sobre'
import Card from '@/components/card'
import Abilities from '@/components/abilities'
import { css, framework, git, internet, language, tech } from '@/data/tecnologys'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 pt-24 pb-10 bg-gray-50 ">
      <Header />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"> */}
        {/* Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code> */}
        {/* </div> */}
        <Sobre/>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-black before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark"
          src="/rose-petals.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="mb-4 grid text-center gap-5 md:grid-cols-2 lg:max-w-5xl lg:w-full lg:mb-5 lg:grid-cols-3 lg:text-left ">
        <Card icon="/design-responsivo.png" description='+2 Anos atuando em projetos front.' />
        <Card icon="/design-responsivo.png" description='Linguagens principais: Javascript & Kotlin' />
        <div className=' text-center items-center max-lg:row-start-1 md:max-lg:col-start-1 md:max-lg:col-end-3 md:max-lg:grid md:max-lg:mx-auto'>
          <h1 className='text-2xl font-bold lg:mt-[50%] max-w-[30ch]'>Sobre mim</h1>
          <p className={`max-w-[30ch] text-lg opacity-50 `}>
            Focada, dedicada e fazendo telas com amor
          </p>
        </div>
      </div>

      <div className="mb-4 grid text-center gap-5 md:grid-cols-2 lg:max-w-5xl lg:w-full lg:mb-5 lg:grid-cols-3 lg:text-left ">
        <Card icon="/design-responsivo.png" description='Formação em MBA de Desenvolvimento Mobile' />
        <Card icon="/design-responsivo.png" description='Design de aplicativos com responsividade' />
        <Card icon="/design-responsivo.png" description='Desenvolvimento para WEB, Nativo android e Mobile (React Native)' />
      </div>

      <div className='flex flex-row max-lg:flex-col max-sm:min-w-[330px]'>
        <div className='text-center mx-auto'>
          <h1 className='text-2xl font-bold mt-14 max-w-[30ch]'>Habilidades & Tecnologias</h1>
          <p className={`max-w-[30ch] text-lg opacity-50 `}>
            Algumas das tecnologias que já utilizei nos projetos:
          </p>
        </div>
        <div className='mt-8 mx-auto flex flex-wrap justify-center lg:max-w-4xl'>
          <Abilities data={language} />
          <Abilities data={framework} />
          <Abilities data={git} />
          <Abilities data={internet} />
          <Abilities data={tech} />
          <Abilities data={css} />
        </div>
      </div>
      {/* <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}

      {/* <Sobre /> */}

        <Footer/>
    </main>
  )
}
