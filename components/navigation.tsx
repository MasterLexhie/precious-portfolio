import { Flex, Text, Spacer, Container, Button } from "@chakra-ui/react";
import NextLink from "next/link";

const Navigation = () => {
  return (
    <Container maxW="1440px" px={{ base: "24px", lg: "138px" }} py="40px">
      <Flex alignItems="center">
        <NextLink href="/" passHref>
          <Text as="a" size={"xsm"}>Home</Text>
        </NextLink>
        <Spacer />
        <Flex gap={{ base: "32px", lg: "87px" }} alignItems="center">
          <NextLink href="/" passHref>
            <Text as="a" size={"xsm"}>Projects</Text>
          </NextLink>
          <NextLink href="/" passHref>
            <Button as="a" marginRight={{ base: "unset", lg: "57px" }}>
              Contact
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navigation;
