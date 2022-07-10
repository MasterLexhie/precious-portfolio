import { Box, Badge, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import ProjectImage from "components/assets/project.png";

interface Project {
  image?: string;
  title: string;
  tag?: string[];
  description: string;
}

const titleStyle = {
  fontSize: "20px",
  lineHeight: "24px",
  fontWeight: 600,
  letterSpacing: "unset",
};

const badgeStyle = {
  bg: "#5222D0",
  color: "#DBFFFF",
  px: "16px",
  py: "8px",
  fontSize: "10px",
  fontWeight: 400,
  lineHeight: "14px",
  letterSpacing: "0.12em",
  borderRadius: "4px",
};

const ProjectCard = (props: Project) => {
  return (
    <>
      <Box>
        <Image src={ProjectImage} alt={"image of project"} layout="responsive" className="project-images" />
      </Box>
      <Box p={{ base: "16px 7px 19px 18px", lg: "29px 8px 31px 26px" }}>
        <Text textTransform="uppercase" {...titleStyle}>
          {props.title}
        </Text>
        <Flex gap={"12px"} flexWrap="wrap" m="11px 0 19px">
          {props?.tag?.map((item: string, index: number) => (
            <Badge key={index} {...badgeStyle}>
              {item}
            </Badge>
          ))}
        </Flex>
        <Text>{props.description}</Text>
      </Box>
    </>
  );
};

export default ProjectCard;
