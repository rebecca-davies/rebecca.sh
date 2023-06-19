import React, { useEffect, useRef } from "react";
import { useAnimate, stagger } from "framer-motion";
import Lottie from "lottie-react";
import bgAnimation from "src/assets/animationData/SplashScreen.json";
import Button from "../html/Button";


const Banner = () => {
    const [scope, animate] = useAnimate();
    const bannerPage = useRef<HTMLDivElement | null>(null);
    const bannerBody = useRef<HTMLDivElement | null>(null);
    const lottieAnim = useRef<HTMLDivElement | null>(null);
   
    useEffect(() => {
        animate(bannerPage.current || '', { opacity: 1 }, {delay: 1 });
        animate(".svgContainer", { display: "none" }, {delay: 1.3 });
    }, []);

    useEffect(() => {
            animate(
            "p",
            { opacity: 1, top: 0 },
            { duration: 0.2, ease: "easeInOut", delay: stagger(0.07, { startDelay: 2}) }
            );
    }, []);

    return (
        <div id="home" ref={scope} className="">
            <Lottie 
            ref={lottieAnim} 
            loop={false} 
            className="top-0 left-0 absolute z-10 w-screen h-screen svgContainer" 
            animationData={bgAnimation} 
            rendererSettings={{preserveAspectRatio: "xMidYMid slice"}} />
        <div ref={bannerPage} className="relative overflow-clip h-screen flex items-center justify-center bg-[#0f0734] opacity-0">
                <div ref={bannerBody} className="max-w-4xl pr-10 pl-10 z-[2]">
                    <p className="text-[#dcff2d] ml-[1px] font-roboto-mono text-lg mb-2 relative opacity-0 top-[20px] tablet:text-base tablet:mb-5">Hey there! My name is</p>
                    <p className="text-purple-100 font-bold relative opacity-0 top-[20px] text-4xl mb-2 tablet:text-7xl tablet:mb-5">Rebecca Davies.</p>
                    <p className="text-[#bdaecd] font-semibold relative opacity-0 top-[20px] text-4xl mb-2 tablet:text-7xl tablet:mb5">I build cool things online.</p>
                    <p className="max-w-3xl text-[#bdaecd] font-roboto leading-8 relative opacity-0 top-[20px] text-sm tablet:text-lg desktop:text-xl  mb-6 tablet:mb-12">I&apos;m really into software, currently specializing in all things <span className="text-[#dcff2d] font-bold">web development</span>. From the <span className="text-[#dcff2d] font-bold">front-end</span> to the <span className="text-[#dcff2d] font-bold">back-end</span>, I love building and designing systems that send a message.<br/>Feel like chatting? Send me a message below!</p>
                    <p className="relative opacity-0 top-[20px]"><Button text="Contact me"/></p>
                </div>
            </div>
        </div>
        
    );
};

export default Banner;
