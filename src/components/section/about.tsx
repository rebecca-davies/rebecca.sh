import React, { useEffect, useRef } from "react";
import { useWindowSize } from "~/utils/screen";
import { useAnimate, useInView, stagger } from "framer-motion";

const About = () => {
  const [scope, animate] = useAnimate();
  const size = useWindowSize();
  const isMobile = typeof size.width === "number" && size.width < 1280
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
      { duration: 0.2, ease: "easeInOut", delay: stagger(0.07) }
    );
   
  }, [isInView, animate, scope]);

  useEffect(() => {
    if (!isInView) {
      return;
    }
    animate(
      ".technologies > p",
      { opacity: 1, top: 60 },
      { duration: 0.2, ease: "easeInOut", delay: stagger(0.07, { startDelay: 0.5}) }
    );
  }, [isInView, animate]);
      
    return (
        <div id="about" className="relative overflow-clip py-32 tablet:py-60 bg-[#0f0734] flex items-center justify-center">
            <div ref={scope} className="max-w-4xl pr-10 pl-10">
              <div className="relative flex opacity-0 top-[20px] title-container">
                <p className="pr-6 text-purple-100  font-bold mb-5 relative text-2xl tablet:text-4xl">About me</p>
                <span className="relative top-[20px] h-[1px] bg-purple-50 opacity-20 flex-grow max-w-lg" />
              </div>
                <p className="max-w-3xl text-[#bdaecd] font-roboto leading-8 relative opacity-0 top-[20px] mb-5 text-base tablet:text-xl">Hey! I&apos;m Rebecca, Culpa cillum anim sunt pariatur consectetur occaecat ea non officia consectetur ad nulla. Enim mollit commodo ea qui magna aliqua esse.</p>
                <p className="max-w-3xl text-[#bdaecd] font-roboto leading-8 relative opacity-0 top-[20px] mb-5 text-base tablet:text-xl">Commodo incididunt mollit occaecat aliqua irure ex consectetur esse elit. Aliqua in tempor aute id id dolor voluptate ex cillum ad velit nisi. Culpa nulla minim pariatur sint ipsum laboris ex occaecat pariatur ipsum fugiat.</p>
                <p className="max-w-3xl text-[#bdaecd] font-roboto leading-8 relative opacity-0 top-[20px] mb-5 text-base tablet:text-xl">Here are a few technologies that I use day-to-day:</p>
                <div className="flex text-[#dcff2d] font-roboto-mono text-sm gap-x-5 gap-y-3 flex-wrap technologies desktop:text-base desktop:gap-x-7 desktop:gap-y-5">
                    <p className="opacity-0 top-[20px]">JavaScript</p>
                    <p className="opacity-0 top-[20px]">TypeScript</p>
                    <p className="opacity-0 top-[20px]">React</p>
                    <p className="opacity-0 top-[20px]">Tailwind</p>
                    <p className="opacity-0 top-[20px]">Java</p>
                    <p className="opacity-0 top-[20px]">Kotlin</p>
                    <p className="opacity-0 top-[20px]">Spring</p>
                    <p className="opacity-0 top-[20px]">CSS</p>
                    <p className="opacity-0 top-[20px]">CSS Pre-processors (SASS, LESS)</p>
                    <p className="opacity-0 top-[20px]">PHP</p>
                    <p className="opacity-0 top-[20px]">Wordpress</p>
                    <p className="opacity-0 top-[20px]">Joomla</p>
                </div>
            </div>
        </div>
    );
};

export default About;
