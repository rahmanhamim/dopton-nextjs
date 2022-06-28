import "../styles/globals.css";
import type { AppProps } from "next/app";
import ToastNotification from "components/shared/ToastNotification";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import NavigationBar from "components/shared/NavigationBar";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#6FB6F6",
        main: "#0082F0",
        dark: "#3B4956",
      },
      secondary: {
        light: "#fff",
        main: "#31D3DD",
        dark: "#75E2E8 ",
      },
    },
    // components: {
    //   MuiButton: {
    //     variants: [
    //       {
    //         props: { variant: "contained" },
    //         style: {
    //           textTransform: "none",
    //           borderRadius: "4px",
    //           padding: ".6rem 1.2rem",
    //         },
    //       },
    //     ],
    //   },
    // },
  });

  return (
    <ThemeProvider theme={theme}>
      <ToastNotification />
      <NavigationBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
