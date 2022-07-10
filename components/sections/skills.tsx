import type { NextComponentType } from "next";
import { Flex, Text, Container, Grid, GridItem, Box } from "@chakra-ui/react";
import {
  Javascript,
  Typescript,
  ReactIcon,
  Redux,
  StyledComponent,
  Git,
  Express
} from "components/skillIcon";

const skills = [
  { id: 1, name: "Javascript", component: Javascript },
  { id: 2, name: "Typescript", component: Typescript },
  { id: 3, name: "React Js", component: ReactIcon },
  { id: 4, name: "Redux", component: Redux },
  { id: 5, name: "Styled Components", component: StyledComponent },
  { id: 6, name: "Git", component: Git },
  { id: 7, name: "Express Js", component: Express },
];

const Skill: NextComponentType = () => {
  return (
    <Container
      as="section"
      maxW="1440px"
      p={{ base: "43px 24px", lg: "78px 138px" }}
    >
      <Flex gap="20px" flexFlow="column">
        <Text size="xl" marginBottom={{ base: "12.5px", lg: "10px" }}>
          Skills
        </Text>
        <Grid
          textAlign="center"
          gridGap={{ base: "80px 48px", lg: "59px 120px" }}
          gridTemplateColumns={{
            base: "repeat(auto-fit, minmax(88px, 1fr))",
            lg: "repeat(auto-fill, minmax(120px, 1fr))",
          }}
        >
          {skills.map((item) => (
            <GridItem key={item.id}>
              <Box>
                <item.component />
              </Box>
              <Text
                marginTop={{ base: "22px", lg: "14px" }}
                textTransform="uppercase"
                fontSize={{ base: "11px", lg: "16px" }}
                lineHeight={{ base: "14px", lg: "19px" }}
              >
                {item.name}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Container>
  );
};

export default Skill;
