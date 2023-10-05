
import Link from 'next/link';

function Sobre() {
    return (
        <div className=" p-4" id='sobre'>

            <div className="container mx-auto px-5">
                <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">Blog.</h1>
                    <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">A statically generated blog example Using
                        <a href="https://nextjs.org/" className="underline hover:text-success duration-200 transition-colors">Next.js</a>
                        <a href="https://wordpress.org" className="underline hover:text-success duration-200 transition-colors">WordPress</a>.
                    </h4>
                </section>
                <section>
                    <div className="mb-8 md:mb-16">
                        <div className="sm:mx-0">
                            <a aria-label="From Server-side Rendering to Static Generation" href="/posts/second-entry">
                                <span className="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">
                                    <span className="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">
                                    </span>

                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                        <div>
                            <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
                                <a className="hover:underline" href="/posts/second-entry">From Server-side Rendering to Static Generation</a>
                            </h3>
                        </div><div><div className="text-lg leading-relaxed mb-4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid dubitas igitur mutare principia naturae?&nbsp;Ita multo sanguine profuso in laetitia et in victoria est mortuus. Omnia contraria, quos etiam insanos esse vultis.&nbsp;Hinc ceteri particulas arripere conati suam quisque videro voluit afferre sententiam.&nbsp;Quis non odit sordidos, vanos, leves, futtiles? Quasi ego id curem, quid ille aiat aut neget.</p>
                        </div>
                            <div className="flex items-center">
                                <div className="w-12 h-12 relative mr-4">
                                    <span className="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0">
                                    </span>
                                </div>
                                <div className="text-xl font-bold">UserName LastName</div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </div>
            );
}

            export default Sobre;





