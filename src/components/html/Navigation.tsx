import Link from "next/link";
import { useEffect, useRef } from "react";
import { useAnimate } from "framer-motion";

interface NavigationProps {
    items: string[];
    classes: string;
}

const Navigation = (props: NavigationProps) => {
    const [scope, animate] = useAnimate();
    const items = props.items;
    const classes = props.classes;
    const parentRef = useRef(null);

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

    return(
        <ul ref={parentRef} className={classes}>
           {items.map((item, index) => (
                <li className="relative opacity-0 top-[-50px]">
                    <Link href="#">{item}</Link>
                </li>
           ))}
        </ul>
        
    );
};

export default Navigation;