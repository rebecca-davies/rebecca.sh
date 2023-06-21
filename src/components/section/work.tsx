import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useAnimate, useInView, stagger } from "framer-motion";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Work = () => {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope, { once: true, margin: "-25% -25% -25% -25%" });

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
            ".splide",
            { opacity: 1, top: 0 },
            { duration: 0.2, ease: "easeInOut", delay: stagger(0.3, { startDelay: 0.2}) }
        );
      }, [isInView, animate, scope]);

    return(
        <div id="previous work" className="relative overflow-clip pt-32 tablet:py-60 bg-[#0f0734] flex flex-col items-center justify-center">
            <div ref={scope} className="max-w-4xl pr-10 pl-10 w-full">
                <div className="relative flex opacity-0 top-[20px] title-container">
                    <p className="pr-6 text-purple-100 text-2xl tablet:text-4xl font-bold mb-5 relative">Previous Work</p>
                    <span className="relative top-[20px] h-[1px] bg-purple-50 opacity-20 flex-grow max-w-lg" />
                </div>
                <p className="text-base tablet:text-xl max-w-3xl text-[#bdaecd] font-roboto leading-8 relative opacity-0 top-[20px] mb-8">As well as a showcase for my projects, I've included a showcase for my previous work, below are just a handful of the many sites I've designed and implemented using various CMS frameworks such as Wordpress and Joomla, with many others experimented with in my spare time.</p>
                <Splide className="splide pb-10 opacity-0 top-[20px]" options={{
                    type: 'loop',
                    gap: '5em',
                }}>
                    <SplideSlide>
                        <img className='' src={'images/work-1.jpg'}/>
                    </SplideSlide>
                    <SplideSlide>
                        <img className='' src={'images/work-2.jpg'}/>
                    </SplideSlide>
                    <SplideSlide>
                        <img className='' src={'images/work-3.jpg'}/>
                    </SplideSlide>
                    <SplideSlide>
                        <img className='' src={'images/work-4.jpg'}/>
                    </SplideSlide>
                    <SplideSlide>
                        <img className='' src={'images/work-5.jpg'}/>
                    </SplideSlide>
                    <SplideSlide>
                        <img className='' src={'images/work-6.jpg'}/>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    )
}

export default Work;