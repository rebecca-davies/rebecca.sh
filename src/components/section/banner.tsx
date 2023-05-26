import React, { useEffect, useRef } from "react";
import { useAnimate } from "framer-motion";
import Lottie from "lottie-react";
import bgAnimation from "src/assets/animationData/g3Ux1uyvaN.json";
import Button from "../html/Button";
import bgGradient from "src/assets/animationData/Comp 4.json";


const Banner = () => {
    const [scope, animate] = useAnimate();
    const bannerPage = useRef<HTMLDivElement | null>(null);
    const bannerBody = useRef<HTMLDivElement | null>(null);
    const lottieAnim = useRef<HTMLDivElement | null>(null);
   
    useEffect(() => {
        animate(bannerPage.current || '', { display: "flex" }, {delay: 1 });
        animate(".svgContainer", { display: "none" }, {delay: 1.3 });
    }, []);

    useEffect(() => {
        const navItems = bannerBody.current?.children;
        const animationTimeouts = Array.from(navItems || []).map((item, index) => {
        return setTimeout(() => {
            animate(
            item,
            { opacity: 1, top: 0 },
            { duration: 0.2, ease: "easeInOut", delay: 1.6 }
            );
        }, 500 + index * 70);
        });
        return () => {
            animationTimeouts.forEach((timeout) => clearTimeout(timeout));
        };
    }, []);

    return (
        <div ref={scope} className="">
            <Lottie 
            ref={lottieAnim} 
            loop={false} 
            className="top-0 left-0 absolute z-10 w-screen h-screen svgContainer" 
            animationData={bgAnimation} 
            rendererSettings={{preserveAspectRatio: "xMidYMid slice"}} />
            <Lottie 
            loop={true} 
            className="top-0 left-0 absolute z-[1] w-screen h-screen opacity-0" 
            animationData={bgGradient} 
            rendererSettings={{preserveAspectRatio: "xMidYMid slice"}} />
            <div ref={bannerPage} className="hidden relative overflow-clip h-screen flex items-center justify-center bg-[#140c3e]">
                <div ref={bannerBody} className="max-w-4xl pr-10 pl-10 z-[2]">
                    <p className="text-[#dcff2d] font-roboto-mono text-base mb-5 relative opacity-0 top-[20px]">Hey there! My name is</p>
                    <p className="text-purple-100 text-7xl font-bold mb-5 relative opacity-0 top-[20px]">Rebecca Davies.</p>
                    <p className="text-[#bdaecd] text-7xl mb-5 font-semibold relative opacity-0 top-[20px]">I build cool things online.</p>
                    <p className="text-xl max-w-3xl text-[#bdaecd] font-roboto leading-8 relative opacity-0 top-[20px] mb-12">I&pos;m <span className="text-[#dcff2d] font-bold">really</span> into software, currently specializing in all things <span className="text-[#dcff2d] font-bold">web development</span>. From the <span className="text-[#dcff2d] font-bold">front-end</span> to the <span className="text-[#dcff2d] font-bold">back-end</span>, I love building and designing systems that send a message.<br/>Feel like chatting? Send me a message below!</p>
                    <p className="relative opacity-0 top-[20px]"><Button text="Contact me"/></p>
                </div>
            </div>
        </div>
        
    );
};

export default Banner;
