import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { useState, useRef, useEffect } from "react";
import Navbar from "~/components/nav/nav";
import Banner from "~/components/section/banner";
import About from "~/components/section/about";
import Social from "~/components/footer/social";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";


function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Section( { child }) {
  const ref = useRef(null);
  return (
    <section>
      <div ref={ref} className="flex-grow h-screen">
        { child }
      </div>
    </section>
  );
}

const Home: NextPage = () => {
 
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com"  crossOrigin=""/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;500;700&family=Roboto:wght@100;300;400;500;700&family=Space+Mono:wght@100;200;300;400;700&display=swap" rel="stylesheet"/>
    </Head>
      <Navbar/>
      <Social/>
      <div className="flex flex-col">
      {[<Banner/>, <About/>].map((section) => (
        <Section child={section}/>
      ))}
      </div>
    </>
  );
};



export default Home;
