import { useEffect, useRef } from "react";
import { useAnimate, stagger } from "framer-motion";
import Navigation from "../html/Navigation";
import { useScrollDirection } from 'react-use-scroll-direction'
import { useWindowSize } from "~/utils/screen";

const Navbar = () => {
    const [scope, animate] = useAnimate();
    const { isScrollingDown, isScrollingUp } = useScrollDirection()
    const size = useWindowSize();
    useEffect(() => {
      if(typeof size.width === "number" && size.width < 1280) {
        if(isScrollingDown) {
          animate(
            '.backdrop' || '',
            { top: -80 },
            { duration: 0.2, ease: "easeInOut"}
          );
          animate(
            'nav' || '',
            { top: -80 },
            { duration: 0.2, ease: "easeInOut" }
          );
        } else if(isScrollingUp) {
          animate(
            '.backdrop' || '',
            { top: 0 },
            { duration: 0.2, ease: "easeInOut" }
          );
          animate(
            'nav' || '',
            { top: -5 },
            { duration: 0.2, ease: "easeInOut" }
          );
        }
      }
    });
    useEffect(() => {
          animate(
            '.title' || '',
            { opacity: 1, top: 25 },
            { duration: 0.2, ease: "easeInOut", delay: 1.5 }
          );
          animate(
            '.backdrop' || '',
            { top: 0 },
            { duration: 0.2, ease: "easeInOut", delay: 1.5 }
          );
      }, []);
  return (
    <div ref={scope} className="">
      <div className="backdrop fixed -top-20 bg-[#0f0734] z-10 w-full h-20 desktop:hidden"/>
      <nav className="fixed z-20 w-full text-purple-100">
          <p className="title max-w-max left-10 text-4xl font-light top-[-20px] opacity-0 relative text-purple-100 z-40">rebecca<br/><span className='relative text-sm -top-5 right-3 font-thin'>🚧 work in progress 🚧</span></p>
          <Navigation items={['home', 'about', 'projects', 'previous work', 'resume']} classes="absolute max-w-md right-10 font-roboto-mono flex flex-col text-right items-end gap-8 text-lg font-light tracking-wide text-purple-100 top-[-30px]" />
      </nav>
    </div>
  );
};

export default Navbar;
