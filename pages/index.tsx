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
        <title>Home | Precious</title>
        <meta name="description" content="Portfolio of Precious" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <About />
      <Projects />
      <Skill />
    </>
  );
};

export default Home;
