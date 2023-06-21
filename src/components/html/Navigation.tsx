import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useAnimate, stagger } from "framer-motion";
import JSXStyle from "styled-jsx/style";

interface NavigationProps {
    items: string[];
    classes: string;
}

const Navigation = (props: NavigationProps) => {
    const [scope, animate] = useAnimate();
    const items = props.items;
    const classes = props.classes;
    const parentRef = useRef<HTMLUListElement | null>(null);
    const [navState, setNavState] = useState(false);

    useEffect(() => {
        animate(
            ".desktop-menu li",
            { opacity: 1, top: 60 },
            { duration: 0.2, ease: "easeInOut", delay: stagger(0.07 , { startDelay: 1.7}) }
            );
        animate(
            ".hamburger",
            { opacity: 1, top: 30 },
            { duration: 0.2, ease: "easeInOut", delay: stagger(0.07 , { startDelay: 1.7}) }
            );
    }, []);

    return(
        <div ref={scope}>
            <button className="z-50 hamburger opacity-0 desktop:hidden absolute right-8 top-[-50px] flex items-center text-purple-50 p-3"  onClick={() => setNavState((prev) => !prev)}>
                <span className={`absolute right-0 h-[3px] w-9 bg-purple-50 ${navState ? `rotate-45 top-[20px]` : `rotate-0 top-[10px]`} duration-200 ease-in-out`}/>
                <span className={`absolute top-[22px] right-0 h-[3px] w-9 bg-purple-50 ${navState ? `opacity-0` : `opacity-100`} duration-200 ease-in-out`}/>
                <span className={`absolute right-0 h-[3px] w-9 bg-purple-50 ${navState ? `-rotate-45 top-[20px]` : `rotate-0 top-[34px]`} duration-200 ease-in-out`}/>
			</button>
        <ul className={`fixed w-full h-full top-0 pt-32 pr-10 bg-[#150a44] ${navState ? `right-0` : `-right-full`} duration-200 ease-in-out`}>
            {items.map((item, index) => (
                <li className="relative text-right mb-8 text-xl text-purple-50">
                    <Link href={`#${item}`} data-text={item}>{item}</Link>
                </li>
            ))}
            <li className="relative text-right mb-8 text-xl text-purple-50">
                <Link href='https://github.com/rebecca-davies/' className="desktop:hidden">github</Link>
            </li>
            <li className="relative text-right mb-8 text-xl text-purple-50">
                <Link href='https://linkedin.com/rebecca-davies1/' className="desktop:hidden">linkedin</Link>
            </li>
        </ul>
        <ul className={`${classes} hidden desktop-menu desktop:flex`}>
            {items.map((item, index) => (
                <li className="relative opacity-0 top-[-50px] text-purple-50 nav-text">
                    <Link href={`#${item}`} data-text={item}>{item}</Link>
                </li>
            ))}
            
        </ul>
        </div>
        
    );
};

export default Navigation;