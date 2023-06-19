import { type NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";
import Navbar from "~/components/nav/nav";
import Banner from "~/components/section/banner";
import About from "~/components/section/about";
import Projects from "~/components/section/projects";
import Work from "~/components/section/work";
import Contact from "~/components/section/contact";
import Social from "~/components/footer/social";
import Attribute from "~/components/footer/attribute";
import {motion, useScroll, useSpring} from "framer-motion";

function Section( { child } : { child: JSX.Element} ) {
  const ref = useRef(null);
  return (
    <section>
      <div ref={ref}>
        { child }
      </div>
    </section>
  );
}

const Home: NextPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
      <motion.div className="progress fixed top-0 h-full right-0 w-[5px] z-50 bg-[#dcff33]" style={{ scaleY, originY: 'top' }} />
      <Navbar/>
      <Social/>
      <div className="flex flex-col">
      {[<Banner key="banner"/>, <About key="about"/>, <Projects key="projects"/>, <Work key="work"/>].map((section) => (
        <Section key={section.key} child={section}/>
      ))}
      </div>
      <Attribute/>
    </>
  );
};

export default Home;
