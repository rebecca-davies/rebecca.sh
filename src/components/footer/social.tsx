import Link from "next/link";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { GitHub, Linkedin } from "react-feather";

const Social = () => {
    const [scope, animate] = useAnimate();
    useEffect(() => {
        animate(scope.current, {opacity: 1}, {delay: 2.5});
    });

    return (
        <div ref={scope} className="fixed z-10 w-full text-purple-100 bottom-0 opacity-0 hidden desktop:block">
            <div className="side absolute left-14 bottom-0">
                <div className="flex flex-col-reverse relative -top-32 gap-6">
                    <Link href="#"><GitHub className="stroke-[2px] stroke-[#bdaecd] ease-linear hover:stroke-[#dcff2d] hover:-translate-y-[4px] duration-100"/></Link>
                    <Link href="#"><Linkedin className="stroke-[2px] stroke-[#bdaecd] ease-linear hover:stroke-[#dcff2d] hover:-translate-y-[4px] duration-100"/></Link>
                </div>
            </div>
            <div className="side absolute right-0 bottom-0">
                <div className="flex flex-col-reverse">
                    <p className="text-sm font-roboto-mono text-[#bdaecd] tracking-widest rotate-90 relative left-[3px] -top-48">email@rebecca.sh</p>
                </div>
            </div>
        </div>
    );
};

export default Social;