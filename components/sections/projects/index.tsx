import { Flex, Text, Container, Grid, GridItem } from "@chakra-ui/react";
import type { NextComponentType } from "next";
import { useRouter } from "next/router";
import ButtonComp from "components/button";
import ProjectCard from "./card";
import tams from 'components/assets/tams.png';
import traveljinni from 'components/assets/traveljinni.png';

const project = [
  {
    id: 1,
    image: tams,
    title: "TAMS",
    tag: ["HTML", "CSS", "Javascript", "VueJs", "Element UI"],
    link: "https://tams.com.ng/",
    description: `A time attendance and employee management enterprise application that allows organisations track employees time & attendance effectively, manage complex shift schedules, and make informed decisions from analytics`,
  },
  {
    id: 2,
    // image: null,
    title: "CCM - Customer Calendar Manager",
    tag: ["HTML", "CSS", "Javascript", "ReactJs", "Ant-Design UI"],
    link: "https://customercalendar.com",
    description: `Helps a vendor manages the entire time guests spend on their stay and activities around the vendor's business`,
  },
  {
    id: 3,
    image: traveljinni,
    title: "Travel Jinni",
    tag: ["HTML", "CSS", "Javascript", "NextJs"],
    link: "https://traveljinni.com/",
    description: `AI driven application that automatically helps plan out a user's entire trip with a detailed plan by directly upselling and cross selling things they can do, things to check, things to pack and things to learn to their travel plan`,
  },
];

const Projects: NextComponentType = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/project");
  };

  const gridItemStyle = {
    background: "#F5F2FD",
    boxShadow: "2px 2px 32px rgba(40, 38, 44, 0.15)",
    borderRadius: "6px",
    transform: { base: "scale(1)", lg: "scale(0.9)" },
    transition: ".3s transform linear",
    _hover: {
      transform: "scale(1)"
    }
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
            md: "repeat(auto-fill, minmax(280px, 1fr))",
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
