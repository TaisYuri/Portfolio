import Header from '@/components/header'
import Sobre from '@/components/about'
import Card from '@/components/card'
import Abilities from '@/components/abilities'
import { css, framework, git, internet, language, tech } from '@/data/tecnologys'
import Footer from '@/components/footer'
import ProjectSlider from '@/components/projectsSlider'
import { projects } from '@/data/projects';
import About from '@/components/about'
import Skills from '@/components/skills'
import { skills } from '@/data/skills'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-16 pt-16 pb-10 bg-gray-50 max-sm:px-8  max-sm:items-start max-lg:px-12">
      <Header />
      <div className="1-10 max-w-5xl w-auto font-mono text-sm lg:flex">
        {/* <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"> */}
        {/* Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code> */}
        {/* </div> */}
        <About />
      </div>


      <div className="mb-4 grid text-center gap-5 md:grid-cols-2 lg:max-w-5xl lg:w-full lg:mb-5 lg:grid-cols-3 lg:text-left animate-fade-up animate-duration-[3000ms]">
        <Card icon="/business_time.png" description='+2 Anos atuando em projetos front end.' />
        <Card icon="/design-responsivo.png" description='Formação em MBA de Desenvolvimento Mobile' />
       
        <div className=' text-center items-center max-lg:row-start-1 md:max-lg:col-start-1 md:max-lg:col-end-3 md:max-lg:grid md:max-lg:mx-auto'>
          <h1 className='text-2xl font-bold lg:mt-[10%] max-w-[30ch]'>Sobre mim</h1>
          <p className={`max-w-[30ch] text-lg opacity-50 `}>
            Focada, dedicada e fazendo telas com amor
          </p>
        </div>
      </div>

      <div className="mb-8 grid text-center gap-5 md:grid-cols-2 lg:max-w-5xl lg:w-full lg:mb-5 lg:grid-cols-3 lg:text-left animate-fade-up animate-duration-[3000ms]">
        <Card icon="/design-responsivo.png" description='Linguagens principais: Javascript, Typescript & Kotlin' />
        <Card icon="/design-responsivo.png" description='Design de aplicativos com responsividade' />
        <Card icon="/design-responsivo.png" description='Desenvolvimento para WEB, Nativo android e Mobile (React Native)' />
      </div>

      <Skills icon={'/design-responsivo.png'} description={''} skills={skills}/>

      {/* <div className='flex'>
        <Skills icon="/design-responsivo.png" description='Formação em MBA de Desenvolvimento Mobile' />
        <Skills icon="/design-responsivo.png" description='Formação em MBA de Desenvolvimento Mobile' />
        <Skills icon="/design-responsivo.png" description='Formação em MBA de Desenvolvimento Mobile' />
        <Skills icon="/design-responsivo.png" description='Formação em MBA de Desenvolvimento Mobile' />
      </div> */}

      <div className='flex flex-row max-lg:flex-col max-sm:min-w-[330px]'>
        <div className='text-center mx-auto'>
          <h1 className='text-2xl font-bold mt-14 max-w-[30ch]'>Habilidades & Tecnologias</h1>
          <p className={`max-w-[30ch] text-lg opacity-50 `}>
            Algumas das tecnologias que já utilizei nos projetos:
          </p>
        </div>
        <div className='mt-8 mx-auto flex flex-wrap justify-center lg:max-w-4xl'>
          <Abilities data={language} />
          <Abilities data={internet} />
          <Abilities data={framework} />
          <Abilities data={git} />
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

      <ProjectSlider projects={projects} />
      <Footer />
    </main>
  )
}
