import Link from "next/link";
import { useEffect, useRef } from "react";
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

    useEffect(() => {
        animate(
            "li",
            { opacity: 1, top: 60 },
            { duration: 0.2, ease: "easeInOut", delay: stagger(0.07 , { startDelay: 1.7}) }
            );
        animate(
            ".hamburger",
            { opacity: 1, top: 19 },
            { duration: 0.2, ease: "easeInOut", delay: stagger(0.07 , { startDelay: 1.7}) }
            );
    }, []);

    return(
        <div ref={scope}>
            <button className="hamburger opacity-0 desktop:hidden absolute right-8 top-[-50px] flex items-center text-purple-50 p-3">
				<svg className="block h-8 w-8 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
       
        <ul className={`${classes} hidden desktop:flex`}>
            {items.map((item, index) => (
                <li className="relative opacity-0 top-[-50px] text-purple-50 nav-text">
                    <Link href={`#${item}`} data-text={item}>{item}</Link>
                </li>
            ))}
            <li className="relative top-[60px]">
                <Link href='https://github.com/rebecca-davies/' className="desktop:hidden">Github</Link>
            </li>
            <li className="relative top-[60px]">
                <Link href='https://linkedin.com/rebecca-davies1/' className="desktop:hidden">Linkedin</Link>
            </li>
        </ul>
        </div>
        
    );
};

export default Navigation;