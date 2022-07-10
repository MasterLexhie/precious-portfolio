import { extendTheme } from "@chakra-ui/react";
import type { ComponentStyleConfig } from "@chakra-ui/theme";

const breakpoints = {
  sm: "320px",
  md: "414px",
  lg: "768px",
  xl: "1440px",
};

const fonts = {
  body: `'Montserrat', sans-serif`,
};

const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 500,
    borderRadius: "6px",
    fontSize: "16px",
    lineHeight: "19.5px",
  },
  sizes: {
    sm: {
      fontSize: "sm",
      px: "16px",
      py: "8px",
    },
    md: {
      fontSize: "md",
      px: "20px",
      py: "13px",
    },
    lg: {
      px: "74px",
      py: "17px",
    }
  },
  variants: {
    solid: {
      bg: "#5222D0",
      color: "#DBFFFF",
      transition: ".2s ease-in-out all",
      _hover: {
        bg: "#4319b0",
        color: "#FFFFFF",
        transform: { base: "unset", lg: "scale(1.05)" },
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "solid",
  },
};

const Text: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 400,
    letterSpacing: "0.04em",
  },
  sizes: {
    xsm: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "19.5px",
    },
    sm: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    md: {
      fontSize: "18px",
      lineHeight: "26px",
    },
    lg: {
      fontSize: { base: "16px", lg: "20px" },
      lineHeight: { base: "18px", lg: "23px" },
    },
    xl: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "26px",
    },
    "2xl": {
      fontSize: { base: "40px", lg: "72px" },
      fontWeight: 600,
      lineHeight: { base: "40px", lg: "87.77px" },
    },
  },
  variants: {
    header: {
      color: "#5222D0",
    },
    title: {
      fontFamily: `'Tinos', sans-serif`,
      textTransform: "uppercase",
      letterSpacing: "unset",
    },
    subTitle: {
      position: "relative",
      _before: {
        content: '""',
        background: "#5222D0",
        width: "5px",
        position: "absolute",
        height: "116px",
        left: {base: "-23px", lg: "-17px"},
        borderRadius: "2px",
        top: "4px"
      },
    },
  },
  defaultProps: {
    size: "sm",
  },
};

const theme = extendTheme({
  breakpoints,
  fonts,
  components: {
    Button,
    Text,
  },
});

export default theme;
