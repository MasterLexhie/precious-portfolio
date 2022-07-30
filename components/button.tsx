import { Button } from "@chakra-ui/react";

interface ButtonContent {
  title: string;
  variants?: string;
  size?: string;
  alignSelf?: string;
  onClick: () => void;
}

const ButtonComp = (props: ButtonContent) => {
  return (
    <Button {...props} whiteSpace="inherit">
      {props.title}
    </Button>
  );
};

export default ButtonComp;
