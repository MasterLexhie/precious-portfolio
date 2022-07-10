import { Flex, Text, Container } from "@chakra-ui/react";
import type { NextComponentType } from "next";

const About: NextComponentType = () => {
  return (
    <Container as="section" maxW="1440px" p={{ base: "43px 24px", lg: "78px 138px" }}>
      <Flex flexFlow="column" gap="20px">
        <Text
          size="xl"
          marginBottom={{ base: "12.5px", lg: "10px" }}
          paddingLeft={{ base: "23px", lg: "unset" }}
        >
          About Me
        </Text>
        <Text
          variant="subTitle"
          maxW={{ base: "320.48px", lg: "843px" }}
          alignSelf={{ base: "center", lg: "unset" }}
        >
          The long barrow was built on land previously inhabited in the
          Mesolithic period. It consisted of a sub-rectangular earthen tumulus,
          estimated to have been 15 metres (50 feet) in length, with a chamber
          built from sarsen megaliths on its eastern end. Both inhumed and
          cremated human remains were placed within this chamber during the
          Neolithic period, representing at least nine or ten individuals.
        </Text>
      </Flex>
    </Container>
  );
};

export default About;
