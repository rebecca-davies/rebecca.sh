import { type NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";
import Navbar from "~/components/nav/nav";
import Banner from "~/components/section/banner";
import About from "~/components/section/about";
import Projects from "~/components/section/projects";
import Social from "~/components/footer/social";

function Section( { child } : { child: JSX.Element} ) {
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
      {[<Banner key="banner"/>, <About key="about"/>, <Projects key="projects"/>].map((section) => (
        <Section key={section.key} child={section}/>
      ))}
      </div>
    </>
  );
};

export default Home;
