import type { NextPage } from "next";
import Head from "next/head";
import Header from "components/sections/header";
import About from "components/sections/about";
import Skill from "components/sections/skills";
import Projects from "components/sections/projects";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Precious A.Kanu | Home</title>
        <meta name="description" content="Portfolio of Precious" />
        <link rel="icon" href="/precious.png" />
      </Head>
      <Header />
      <About />
      <Projects />
      <Skill />
    </>
  );
};

export default Home;
