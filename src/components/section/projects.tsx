import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useAnimate, useInView, stagger } from "framer-motion";

const Projects = () => {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope, { once: true, margin: "-25% -25% -25% -25%" });
    const techRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isInView) {
          return;
        }
        animate(
            ".title-container",
            { opacity: 1, top: 0 },
            { duration: 0.2, ease: "easeInOut", delay: stagger(0.07) }
          );
        animate(
            "p",
            { opacity: 1, top: 0 },
            { duration: 0.2, ease: "easeInOut" }
        );
        animate(
            ".projects > div",
            { opacity: 1, top: 0 },
            { duration: 0.2, ease: "easeInOut", delay: stagger(0.3, { startDelay: 0.2}) }
        );
      }, [isInView, animate, scope]);

    return(
        <div id="projects" className="relative overflow-clip py-60 bg-[#0f0734] flex items-center justify-center">
            <div ref={scope} className="max-w-4xl pr-10 pl-10">
              <div className="relative flex opacity-0 top-[20px] title-container mb-5">
                <p className="pr-6 text-purple-100 text-4xl font-bold mb-5 relative">Projects</p>
                <span className="relative top-[20px] h-[1px] bg-purple-50 opacity-20 flex-grow max-w-lg" />
              </div>
                <div className="flex flex-col gap-24 projects">
                    <div className="flex flex-col gap-6 opacity-0 top-[20px]">
                        <div className="relative overflow-clip">
                            <span className="block w-full h-60 rounded-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 relative"/>
                        </div>
                        <div className="flex flex-col text-xl max-w-4xl text-[#bdaecd] font-roboto leading-8 relative">
                            <p className="text-purple-100 text-2xl font-bold mb-3">🤖 Blossom</p>
                            <p className="mb-3">Blossom is a replacement for Siri powered by OpenAI's generative AI, Google Cloud TTS and Vosk's lightweight voice recognition library. Check it out <Link href='https://github.com/rebecca-davies/Blossom' className="font-semibold text-[#dcff2d]">here</Link>.</p>
                            <div ref={techRef} className="flex text-[#dcff2d] font-roboto-mono text-base gap-x-7 gap-y-5 flex-wrap">
                                <p>Kotlin</p>
                                <p>Google Cloud</p>
                                <p>Vosk</p>
                                <p>OpenAI</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 opacity-0 top-[20px]">
                        <div className="relative overflow-clip">
                            <span className="block w-full h-60 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 relative"/>
                        </div>
                        <div className="flex flex-col text-xl max-w-4xl text-[#bdaecd] font-roboto leading-8 relative">
                            <p className="text-purple-100 text-2xl font-bold mb-3">🚧 rebecca.sh</p>
                            <p className="mb-3">A site to showcase my technical knowledge and previous work, powered by Next.js, Tailwind, TypeScript and Prisma.  Check it out <Link href='https://github.com/rebecca-davies/rebecca' className="font-semibold text-[#dcff2d]">here</Link>.</p>
                            <div ref={techRef} className="flex text-[#dcff2d] font-roboto-mono text-base gap-x-7 gap-y-5 flex-wrap">
                                <p>React</p>
                                <p>Next.js</p>
                                <p>Tailwind</p>
                                <p>Prisma</p>
                                <p>CSS</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 opacity-0 top-[20px]">
                        <div className="relative overflow-clip">
                            <span className="block w-full h-60 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 relative"/>
                        </div>
                        <div className="flex flex-col text-xl max-w-4xl text-[#bdaecd] font-roboto leading-8 relative">
                            <p className="text-purple-100 text-2xl font-bold mb-3">📆 E-Shop Calendar</p>
                            <p className="mb-3">An extension that adds support for more control over delivery dates, providing customers with a rich delivery date picker, also allowing total control over the days available with many flexible options. Check it out <Link href='' className="font-semibold text-[#dcff2d]">here</Link>.</p>
                            <div ref={techRef} className="flex text-[#dcff2d] font-roboto-mono text-base gap-x-7 gap-y-5 flex-wrap">
                                <p>JavaScript</p>
                                <p>PHP</p>
                                <p>Joomla</p>
                                <p>CSS</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 opacity-0 top-[20px]">
                        <div className="relative overflow-clip">
                            <span className="block w-full h-60 rounded-lg bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400 relative"/>
                        </div>
                        <div className="flex flex-col text-xl max-w-4xl text-[#bdaecd] font-roboto leading-8 relative">
                            <p className="text-purple-100 text-2xl font-bold mb-3">🖌️ Sprite Editor</p>
                            <p className="mb-3">A tool for artists to create sprites from 3D models using propietary Jagex tooling. Check it out <Link href='https://github.com/rebecca-davies/Sprite-Editor' className="font-semibold text-[#dcff2d]">here</Link>.</p>
                            <div ref={techRef} className="flex text-[#dcff2d] font-roboto-mono text-base gap-x-7 gap-y-5 flex-wrap">
                                <p>Kotlin</p>
                                <p>Springboot</p>
                                <p>JavaFX</p>
                                <p>TornadoFX</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 opacity-0 top-[20px]">
                        <div className="relative overflow-clip">
                            <span className="block w-full h-60 rounded-lg bg-gradient-to-r from-green-300 to-purple-400 relative"/>
                        </div>
                        <div className="flex flex-col text-xl max-w-4xl text-[#bdaecd] font-roboto leading-8 relative">
                            <p className="text-purple-100 text-2xl font-bold mb-3">📁 Rebecca-XP</p>
                            <p className="mb-3">A directory listing emulator, styled and functioning similar to Windows XP. Check it out <Link href='https://github.com/rebecca-davies/rebecca-xp' className="font-semibold text-[#dcff2d]">here</Link>.</p>
                            <div ref={techRef} className="flex text-[#dcff2d] font-roboto-mono text-base gap-x-7 gap-y-5 flex-wrap">
                                <p>Kotlin</p>
                                <p>Springboot</p>
                                <p>Thymeleaf</p>
                                <p>CSS</p>
                                <p>AJAX</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-6 opacity-0 top-[20px]">
                        <div className="relative overflow-clip">
                            <span className="block w-full h-60 rounded-lg bg-gradient-to-tr from-violet-500 to-orange-300 relative"/>
                        </div>
                        <div className="flex flex-col text-xl max-w-4xl text-[#bdaecd] font-roboto leading-8 relative">
                            <p className="text-purple-100 text-2xl font-bold mb-3">🌐 JagBuf</p>
                            <p className="mb-3">JagBuf is a JavaScript Buffer class that implements Jagex buffer handling logic not available in the stdlib. Check it out <Link href='https://github.com/rebecca-davies/JagBuf' className="font-semibold text-[#dcff2d]">here</Link>.</p>
                            <div ref={techRef} className="flex text-[#dcff2d] font-roboto-mono text-base gap-x-7 gap-y-5 flex-wrap">
                                <p>JavaScript</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 opacity-0 top-[20px]">
                        <div className="relative overflow-clip">
                            <span className="block w-full h-60 rounded-lg bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 relative"/>
                        </div>
                        <div className="flex flex-col text-xl max-w-4xl text-[#bdaecd] font-roboto leading-8 relative">
                            <p className="text-purple-100 text-2xl font-bold mb-3">🎮 PokeMMO</p>
                            <p className="mb-3">A Pokemon clone re-imagined as an MMO supporting thousands of concurrent players.</p>
                            <div ref={techRef} className="flex text-[#dcff2d] font-roboto-mono text-base gap-x-7 gap-y-5 flex-wrap">
                                <p>Kotlin</p>
                                <p>OpenGL</p>
                                <p>LibGDX</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;