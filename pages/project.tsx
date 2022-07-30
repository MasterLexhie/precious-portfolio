import type { NextPage } from "next";
import { Container, Input, Text, Grid, GridItem } from "@chakra-ui/react";
import ProjectCard from "components/sections/projects/card";
import Head from "next/head";

const project = [
  {
    id: 1,
    // image: null,
    title: "title project",
    tag: ["javascript", "PostgreSQL", "React", "redux"],
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
  sint. Velit officia consequat duis enim velit mollit. Exercitation
  veniam consequat sunt nostrud amet.`,
  },
  {
    id: 2,
    // image: null,
    title: "title project",
    tag: ["javascript", "PostgreSQL", "React", "redux"],
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
  sint. Velit officia consequat duis enim velit mollit. Exercitation
  veniam consequat sunt nostrud amet.`,
  },
  {
    id: 3,
    // image: null,
    title: "title project",
    tag: ["javascript", "PostgreSQL", "React", "redux"],
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
  sint. Velit officia consequat duis enim velit mollit. Exercitation
  veniam consequat sunt nostrud amet.`,
  },
  {
    id: 4,
    // image: null,
    title: "title project",
    tag: ["javascript", "PostgreSQL", "React", "redux"],
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
  sint. Velit officia consequat duis enim velit mollit. Exercitation
  veniam consequat sunt nostrud amet.`,
  },
  {
    id: 5,
    // image: null,
    title: "title project",
    tag: ["javascript", "PostgreSQL", "React", "redux"],
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
  sint. Velit officia consequat duis enim velit mollit. Exercitation
  veniam consequat sunt nostrud amet.`,
  },
  {
    id: 6,
    // image: null,
    title: "title project",
    tag: ["javascript", "PostgreSQL", "React", "redux"],
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
  sint. Velit officia consequat duis enim velit mollit. Exercitation
  veniam consequat sunt nostrud amet.`,
  },
];

const Project: NextPage = () => {
  const gridItemStyle = {
    background: "#F5F2FD",
    boxShadow: "2px 2px 32px rgba(40, 38, 44, 0.15)",
    borderRadius: "6px",
  };

  return (
    <>
      <Head>
        <title>Precious A.Kanu | Projects</title>
        <meta name="description" content="Contact Precious" />
        <link rel="icon" href="/precious.png" />
      </Head>
      <Container
        as="section"
        maxW="1440px"
        p={{ base: "43px 24px", lg: "78px 138px" }}
      >
        <Text size="xl" marginBottom={{ base: "12.5px", lg: "43px" }}>
          Projects
        </Text>
        <Grid
          gap="27px 16px"
          marginBottom={{ base: "16px", lg: "54px" }}
          gridTemplateColumns={{
            base: "repeat(auto-fill, minmax(180px, 1fr))",
            md: "repeat(auto-fill, minmax(280px, 1fr))",
          }}
        >
          {project.map((item) => (
            <GridItem key={item.id} {...gridItemStyle}>
              <ProjectCard {...item} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Project;
