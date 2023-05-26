import React, { useEffect, useRef } from "react";
import { useAnimate, useInView } from "framer-motion";

const About = () => {
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

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const technologies = techRef.current?.children;
    const animationTimeouts = Array.from(technologies || []).map((item, index) => {
      return setTimeout(() => {
        animate(
          item,
          { opacity: 1, top: 60 },
          { duration: 0.2, ease: "easeInOut", delay: 0.4 }
        );
      }, 200 + index * 70);
    });

    return () => {
      animationTimeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [isInView, animate, techRef]);
      
    return (
        <div id="about" className="relative overflow-clip h-screen bg-[#140c3e] flex items-center justify-center">
            <div ref={scope} className="max-w-4xl pr-10 pl-10">
                <p className="text-purple-100 text-4xl font-bold mb-5 relative opacity-0 top-[20px]">About me</p>
                <p className="text-xl max-w-3xl text-[#bdaecd] font-roboto leading-8 relative opacity-0 top-[20px] mb-5">Hey! I&pos;m Rebecca, Culpa cillum anim sunt pariatur consectetur occaecat ea non officia consectetur ad nulla. Enim mollit commodo ea qui magna aliqua esse. Sint aliquip veniam sit amet magna quis exercitation do id sint voluptate ex. Officia sunt nostrud incididunt ullamco ea quis proident.</p>
                <p className="text-xl max-w-3xl text-[#bdaecd] font-roboto leading-8 relative opacity-0 top-[20px] mb-5">Commodo incididunt mollit occaecat aliqua irure ex consectetur esse elit. Aliqua in tempor aute id id dolor voluptate ex cillum ad velit nisi. Culpa nulla minim pariatur sint ipsum laboris ex occaecat pariatur ipsum fugiat. Ut Lorem eu consequat consectetur eu. Nulla laboris nulla esse pariatur aute cillum sint excepteur commodo.</p>
                <p className="text-xl max-w-3xl text-[#bdaecd] font-roboto leading-8 relative opacity-0 top-[20px] mb-5">Here are a few technologies that I use day-to-day:</p>
                <div ref={techRef} className="flex text-[#dcff2d] font-roboto-mono text-base gap-x-7 gap-y-5 flex-wrap">
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
