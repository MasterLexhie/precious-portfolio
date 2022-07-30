import { Flex, Text, Spacer, Container, Button, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Image from "next/image";
import HeaderImage from "components/assets/precious.png";

const Navigation = () => {
  const router = useRouter();
  const style = {
    borderBottom: router.asPath === "/project" ? "4px solid #5222D0" : "unset",
    padding: "10px 0",
  };
  const homeLogoStyle = {
    border: "3px solid #5222d0",
    borderRadius: "100%",
    boxShadow: "0px 0px 5px 5px #eaeaea",
  };

  return (
    <Container maxW="1440px" px={{ base: "24px", lg: "138px" }} py="20px">
      <Flex alignItems="center">
        <NextLink href="/" passHref>
          <Box
            as="a"
            style={homeLogoStyle}
            width={{base: "40px", md: "80px"}}
            height={{base: "40px", md: "80px"}}
          >
            <Image src={HeaderImage} alt="man-coding-on-computer" />
          </Box>
          {/* <Text as="a" size={"xsm"}>
            Home
          </Text> */}
        </NextLink>
        <Spacer />
        <Flex gap={{ base: "32px", lg: "87px" }} alignItems="center">
          <NextLink href="/project" passHref>
            <Text as="a" size={"xsm"} style={style}>
              Projects
            </Text>
          </NextLink>
          <NextLink href="/contact" passHref>
            <Button as="a">Contact</Button>
          </NextLink>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navigation;
