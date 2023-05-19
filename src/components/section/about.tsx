import React, { useEffect, useRef, useState } from "react";
import { useAnimate } from "framer-motion";
import Link from "next/link";
import Typing from "../effects/Typing";


const About = () => {
    const [scope, animate] = useAnimate()
    return (
        <div id="about" className="relative overflow-clip h-screen bg-[#e06c6a]">
        </div>
    );
};

export default About;
