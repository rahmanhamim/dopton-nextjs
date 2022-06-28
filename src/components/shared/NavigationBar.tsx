import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import Styles from "../../styles/NavigationBar.module.css";
import ButtonNoBg from "./ButtonNoBg";
import ButtonPrimary from "./ButtonPrimary";

const NavigationBar = () => {
  const [navState, setNavState] = useState<boolean>(false);
  return (
    <>
      <AppBar
        position="static"
        sx={{ bgcolor: "#fff", color: "primary.dark", py: 1 }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", p: "0 !important" }}>
            <Box flexGrow="1" sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  borderRight: "2px solid #F2E6FF",
                  px: 2,
                }}
              >
                <Image
                  src="/assets/imgs/dopton-logo.svg"
                  alt="site-logo"
                  width="132px"
                  height="48px"
                />
              </Box>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mx: 2,
                  cursor: "pointer",
                }}
              >
                <Image
                  src="/assets/imgs/search-logo.svg"
                  alt="site-logo"
                  width="16px"
                  height="16px"
                  className={Styles.searchIcon}
                />
                <Typography component="span" sx={{ ml: "4px" }}>
                  Search Offer
                </Typography>
              </Typography>
            </Box>
            <Box
              flexGrow="1"
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
              }}
            >
              <Link href="/">
                <a
                  style={{
                    margin: "0 10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box component="span" sx={{ mr: "4px" }}>
                    <Image
                      src="/assets/imgs/home-icon.svg"
                      alt="search-logo"
                      width="16px"
                      height="16px"
                    />
                  </Box>
                  <Typography component="span" sx={{ color: "primary.main" }}>
                    Home
                  </Typography>
                </a>
              </Link>
              <Link href="/">
                <a className={Styles.navLink}>Store</a>
              </Link>
              <Link href="/">
                <a className={Styles.navLink}>Membership</a>
              </Link>
              <Link href="/">
                <a className={Styles.navLink}>Blog</a>
              </Link>
              <Link href="/">
                <a className={Styles.navLink}>Contract</a>
              </Link>
            </Box>
            <Box component="span" sx={{ display: { xs: "none", lg: "flex" } }}>
              <ButtonNoBg text="Log in" />
            </Box>
            <Box component="span" sx={{ display: { xs: "none", lg: "flex" } }}>
              <ButtonPrimary
                text="Join"
                icon={
                  <Image
                    src="/assets/imgs/joinporfile-logo.svg"
                    alt="search-logo"
                    width="16px"
                    height="16px"
                  />
                }
                margin="0 0.5em"
              />
            </Box>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                mr: { xs: 0, lg: 2 },
                p: 0,
                display: { xs: "block", lg: "none" },
              }}
              onClick={() => setNavState(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={navState}
        onClose={() => setNavState(false)}
        sx={{
          ".MuiPaper-root": {
            background: "rgba(255,255, 255, 0.8)",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <Box
          sx={{
            width: 250,

            height: "100vh",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", my: 5, px: 3 }}>
            <Link href="/">
              <a
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                className={Styles.navLinkMobile}
              >
                <Box component="span" sx={{ mr: "4px" }}>
                  <Image
                    src="/assets/imgs/home-icon.svg"
                    alt="search-logo"
                    width="16px"
                    height="16px"
                  />
                </Box>
                <Typography component="span" sx={{ color: "primary.main" }}>
                  Home
                </Typography>
              </a>
            </Link>
            <Link href="/">
              <a className={Styles.navLinkMobile}>Store</a>
            </Link>
            <Link href="/">
              <a className={Styles.navLinkMobile}>Membership</a>
            </Link>
            <Link href="/">
              <a className={Styles.navLinkMobile}>Blog</a>
            </Link>
            <Link href="/">
              <a className={Styles.navLinkMobile}>Contract</a>
            </Link>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default NavigationBar;
