import { Box, Flex, Text, Container } from "@chakra-ui/react";
import type { NextComponentType } from "next";
import { useRouter } from 'next/router'
import ButtonComp from "components/button";
import Image from "next/image";
import HeaderImage from "components/assets/header-illustration.svg";

const Header: NextComponentType = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/contact");
  };

  const buttonObject = {
    title: 'Contact Me',
    onClick: handleSubmit,
  }

  return (
    <Container
      as="section"
      maxW="1440px"
      p={{ base: "29px 24px", lg: "141px 138px"}}
    >
      <Flex
        alignItems={{ base: "center" }}
        justifyContent={{ lg: "space-between" }}
        flexFlow={{ base: "column-reverse", lg: "row" }}
        gap="63px"
      >
        <Box textAlign={{ base: "center", lg: "unset" }}>
          <Text
            size="lg"
            variant="title"
            marginBottom={{ base: "12.5px", lg: "10px" }}
          >
            Developer
          </Text>
          <Text size="2xl" variant="header">
            Precious Alexandra Kanu
          </Text>
          <Text
            maxW={{ base: "unset", lg: "514px" }}
            margin={{ base: "16px 0", lg: "11px 0 30px" }}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt.
          </Text>
          <ButtonComp {...buttonObject} />
        </Box>
        <Box>
          <Image src={HeaderImage} alt="man-coding-on-computer" />
        </Box>
      </Flex>
    </Container>
  );
};

export default Header;
