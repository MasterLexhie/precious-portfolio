import { Flex, Text, Container, Grid, GridItem } from "@chakra-ui/react";
import ButtonComp from "components/button";
import type { NextComponentType } from "next";
import ProjectCard from "./card";

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
];

const Projects: NextComponentType = () => {
  const handleSubmit = () => {
    console.log("Click working");
  };

  const gridItemStyle = {
    background: "#F5F2FD",
    boxShadow: "2px 2px 32px rgba(40, 38, 44, 0.15)",
    borderRadius: "6px",
  };

  const buttonObject = {
    title: "SEE ALL PROJECTS",
    size: "lg",
    alignSelf: "center",
    onClick: handleSubmit,
  };

  return (
    <Container
      as="section"
      maxW="1440px"
      p={{ base: "43px 24px", lg: "78px 138px" }}
    >
      <Flex gap="20px" flexFlow="column">
        <Text size="xl" marginBottom={{ base: "12.5px", lg: "10px" }}>
          Projects
        </Text>
        <Grid
          gap="27px 16px"
          marginBottom={{ base: "16px", lg: "54px" }}
          gridTemplateColumns={{
            base: "repeat(auto-fill, minmax(180px, 1fr))",
            md: "repeat(auto-fill, minmax(280px, 1fr))"
          }}
        >
          {project.map((item) => (
            <GridItem key={item.id} {...gridItemStyle}>
              <ProjectCard {...item} />
            </GridItem>
          ))}
        </Grid>
        <ButtonComp {...buttonObject} />
      </Flex>
    </Container>
  );
};

export default Projects;
