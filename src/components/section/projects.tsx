import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useAnimate, useInView } from "framer-motion";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Projects = () => {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope, { once: true });
    const techRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isInView) {
          return;
        }
        const bodyItems = scope.current?.children;
        const animationTimeouts = Array.from(bodyItems || []).map((item, index) => {
          return setTimeout(() => {
            animate(
              item,
              { opacity: 1, top: 0 },
              { duration: 0.2, ease: "easeInOut" }
            );
          }, index * 70);
        });
    
        return () => {
          animationTimeouts.forEach((timeout) => clearTimeout(timeout));
        };
      }, [isInView, animate, scope]);

    return(
        <div id="projects" className="relative overflow-clip h-screen bg-[#140c3e] flex items-center justify-center">
            <div ref={scope} className="max-w-4xl pr-10 pl-10">
                <p className="text-purple-100 text-4xl font-bold mb-10 relative opacity-0 top-[20px]">Projects</p>
                <Splide className="pb-10" options={{
                    gap: '5rem',
                    type: 'loop',
                    arrows: false,
                }}>
                    <SplideSlide>
                        <div className="flex flex-col gap-6">
                            <span className="block w-full h-60 bg-purple-50 relative"/>
                            <div className="flex flex-col text-xl max-w-4xl text-[#bdaecd] font-roboto leading-8 relative">
                                <p className="text-purple-100 text-2xl font-bold mb-3">Blossom</p>
                                <p className="mb-3">Blossom is a replacement for Siri powered by OpenAI's generative AI, Google Cloud TTS and Vosk's lightweight voice recognition library. Check it out <Link href='https://github.com/rebecca-davies/Blossom' className="font-semibold text-[#dcff2d]">here</Link>.</p>
                                <div ref={techRef} className="flex text-[#dcff2d] font-roboto-mono text-base gap-x-7 gap-y-5 flex-wrap">
                                    <Link href='https://kotlinlang.org/'>Kotlin</Link>
                                    <Link href='https://cloud.google.com/'>Google Cloud</Link>
                                    <Link href='https://github.com/alphacep/vosk-api/'>Vosk</Link>
                                    <Link href='https://openai.com/product'>OpenAI</Link>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex flex-col gap-6">
                            <span className="block w-full h-60 bg-purple-50 relative"/>
                            <div className="flex flex-col text-xl max-w-4xl text-[#bdaecd] font-roboto leading-8 relative">
                                <p className="text-purple-100 text-2xl font-bold mb-3">E-Shop Calendar</p>
                                <p className="mb-3">An extension that adds support for more control, providing customers with a rich delivery date picker, allowing total control over the days available. Check it out <Link href='' className="font-semibold text-[#dcff2d]">here</Link>.</p>
                                <div ref={techRef} className="flex text-[#dcff2d] font-roboto-mono text-base gap-x-7 gap-y-5 flex-wrap">
                                    <Link href=''>JavaScript</Link>
                                    <Link href=''>PHP</Link>
                                    <Link href=''>Joomla</Link>
                                    <Link href=''>CSS</Link>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex flex-col gap-6">
                            <span className="block w-full h-60 bg-purple-50 relative"/>
                            <div className="flex flex-col text-xl max-w-4xl text-[#bdaecd] font-roboto leading-8 relative">
                                <p className="text-purple-100 text-2xl font-bold mb-3">Rebecca-XP</p>
                                <p className="mb-3">A directory listing emulator; styled and functions similar to Windows XP. Check it out <Link href='https://github.com/rebecca-davies/rebecca-xp' className="font-semibold text-[#dcff2d]">here</Link>.</p>
                                <div ref={techRef} className="flex text-[#dcff2d] font-roboto-mono text-base gap-x-7 gap-y-5 flex-wrap">
                                    <Link href='https://kotlinlang.org/'>Kotlin</Link>
                                    <Link href='https://spring.io/projects/spring-boot'>Springboot</Link>
                                    <Link href='https://www.thymeleaf.org/'>Thymeleaf</Link>
                                    <p>CSS</p>
                                    <p>AJAX</p>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="flex flex-col gap-6">
                            <span className="block w-full h-60 bg-purple-50 relative"/>
                            <div className="flex flex-col text-xl max-w-4xl text-[#bdaecd] font-roboto leading-8 relative">
                                <p className="text-purple-100 text-2xl font-bold mb-3">JagBuf</p>
                                <p className="mb-3">JagBuf is a JavaScript Buffer class that implements Jagex buffer handling logic not available in the stdlib. Check it out <Link href='https://github.com/rebecca-davies/JagBuf' className="font-semibold text-[#dcff2d]">here</Link>.</p>
                                <div ref={techRef} className="flex text-[#dcff2d] font-roboto-mono text-base gap-x-7 gap-y-5 flex-wrap">
                                    <Link href=''>JavaScript</Link>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    )
}

export default Projects;