import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#fff", color: "primary.dark" }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex" }}>
          <Box flexGrow="1" sx={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/assets/imgs/dopton-logo.svg"
              alt="site-logo"
              width="132px"
              height="48px"
            />
            <Typography>Search Offer</Typography>
          </Box>
          <Box flexGrow="1">
            <Link href="/">
              <a
                style={{
                  margin: "0 10px",
                }}
              >
                <Image
                  src="/assets/imgs/home-icon.svg"
                  alt="search-logo"
                  width="16px"
                  height="16px"
                />
                <Typography component="span" sx={{ color: "primary.main" }}>
                  {" "}
                  Home
                </Typography>
              </a>
            </Link>
            <Link href="/">
              <a style={{ margin: "0 10px" }}>Store</a>
            </Link>
            <Link href="/">
              <a style={{ margin: "0 10px" }}>Membership</a>
            </Link>
            <Link href="/">
              <a style={{ margin: "0 10px" }}>Blog</a>
            </Link>
            <Link href="/">
              <a style={{ margin: "0 10px" }}>Contract</a>
            </Link>
          </Box>
          <Button color="inherit">
            <a style={{ margin: "0 10px" }}>Login</a>
          </Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavigationBar;
