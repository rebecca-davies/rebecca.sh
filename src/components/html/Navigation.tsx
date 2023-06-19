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
    }, []);

    return(
        <ul ref={scope} className={classes}>
            {items.map((item, index) => (
                <li className="relative opacity-0 top-[-50px] text-purple-50 nav-text">
                    <Link href={`#${item}`} data-text={item}>{item}</Link>
                </li>
            ))}
        </ul>
        
    );
};

export default Navigation;