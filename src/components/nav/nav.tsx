import Link from "next/link";
import { useEffect, useRef } from "react";
import { useAnimate } from "framer-motion";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
  } from "framer-motion";

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
    useEffect(() => {
        const navItems = parentRef.current.children;
        const animationTimeouts = Array.from(navItems).map((item, index) => {
        return setTimeout(() => {
            animate(
            item,
            { opacity: 1, top: 60 },
            { duration: 0.2, ease: "easeInOut", delay: 1.2 }
            );
        }, 500 + index * 70);
        });

        return () => {
            animationTimeouts.forEach((timeout) => clearTimeout(timeout));
        };
    }, []);

  return (
    <>
      <nav className="fixed z-10 w-full text-purple-100">
          <p ref={logoRef} className="max-w-max left-10 text-4xl font-light top-[-20px] opacity-0 relative text-purple-100">rebecca</p>
          <ul
            ref={parentRef}
            className="absolute max-w-md right-10 font-roboto-mono flex flex-col text-right items-end gap-8 text-lg font-light tracking-wide text-purple-100 top-[-30px]"
          >
            <li className="relative opacity-0 top-[0px]">
              <Link href="/" className="text-[#dcff2d]">home</Link>
            </li>
            <li className="relative opacity-0 top-[-50px]">
              <Link href="#about">about</Link>
            </li>
            <li className="relative opacity-0 top-[-50px]">
              <Link href="/projects">projects</Link>
            </li>
            <li className="relative opacity-0 top-[-50px]">
              <Link href="/previous-work">previous work</Link>
            </li>
            <li className="relative opacity-0 top-[-50px]">
              <Link href="/contact">contact</Link>
            </li>
            <li className="relative opacity-0 top-[-50px] mt-6">
              <Link href="#contact" className="btn border-2 border-[#dcff2d] pt-4 pb-4 pl-8 pr-8 font-roboto-mono text-lg">Resume</Link>
            </li>
          </ul>
      </nav>
    </>
  );
};

export default Navbar;
