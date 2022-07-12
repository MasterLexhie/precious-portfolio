import { Flex, Text, Spacer, Container, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";

const Navigation = () => {
  const router = useRouter();
  const style = {
    borderBottom: router.asPath === "/project" ? "4px solid #5222D0" : "unset",
    padding: "10px 0"
  };

  return (
    <Container maxW="1440px" px={{ base: "24px", lg: "138px" }} py="40px">
      <Flex alignItems="center">
        <NextLink href="/" passHref>
          <Text as="a" size={"xsm"}>
            Home
          </Text>
        </NextLink>
        <Spacer />
        <Flex gap={{ base: "32px", lg: "87px" }} alignItems="center">
          <NextLink href="/project" passHref>
            <Text as="a" size={"xsm"} style={style}>
              Projects
            </Text>
          </NextLink>
          <NextLink href="/contact" passHref>
            <Button as="a">
              Contact
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navigation;
