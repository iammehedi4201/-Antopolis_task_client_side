import { createTheme } from "@mui/material/styles";

declare module "@mui/system" {
  interface BreakpointOverrides {
    // Your custom breakpoints
    laptop: true;
    tablet: true;
    mobile: true;
    desktop: true;
    // Remove default breakpoints
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f8f8f8",
    },
    secondary: {
      main: "#666f73",
      light: "#f8f8f8",
    },
    background: {
      default: "#000000", // Set background color to black
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "desktop",
      },
    },
  },
  typography: {
    body1: {
      color: "#0B1134CC",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 481,
      laptop: 769,
      desktop: 1500,
    },
  },
});

theme.shadows[1] = "0px 5px 22px lightgray";
