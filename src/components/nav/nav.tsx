import Link from "next/link";
import { useEffect, useRef } from "react";
import { useAnimate } from "framer-motion";
import Button from "../html/Button";
import Navigation from "../html/Navigation";

const Navbar = () => {
    const [scope, animate] = useAnimate();
    const parentRef = useRef(null);
    const logoRef = useRef(null)
    useEffect(() => {
        const animationTimeout = setTimeout(() => {
          animate(
            logoRef.current,
            { opacity: 1, top: 25 },
            { duration: 0.2, ease: "easeInOut", delay: 1 }
          );
        }, 500);
    
        return () => clearTimeout(animationTimeout);
      }, []);
   

  return (
    <>
      <nav className="fixed z-10 w-full text-purple-100">
          <p ref={logoRef} className="max-w-max left-10 text-4xl font-light top-[-20px] opacity-0 relative text-purple-100">rebecca</p>
          <Navigation items={['home', 'about', 'projects', 'previous work', 'contact', 'resume']} classes="absolute max-w-md right-10 font-roboto-mono flex flex-col text-right items-end gap-8 text-lg font-light tracking-wide text-purple-100 top-[-30px]" />
      </nav>
    </>
  );
};

export default Navbar;
