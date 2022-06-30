import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",
        background: {
          xs: "linear-gradient(94.66deg, #0082F0 0%, #6FB6F6 100%)",
          xl: "none",
        },
        py: 5,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          zIndex: "-10",
          width: "100%",
          display: { xs: "none", xl: "block" },
        }}
      >
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/imgs/footer-bg-svg.svg"
          alt="imgs"
          style={{ width: "100%", height: "100%", display: "block" }}
        />
      </Box>

      <Container sx={{ mt: { xs: 0, xl: 30 } }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <Box
              sx={{
                color: "#fff",
                "*": {
                  display: "block",
                  my: "12px",
                },
              }}
            >
              <Image
                src="/assets/imgs/dopton-logo-white.svg"
                width="200px"
                height="80px"
                objectFit="contain"
                alt="footer logo"
              />
              <Link href="/">
                <a> How it works</a>
              </Link>
              <Link href="/">
                <a>Our Blog</a>
              </Link>
              <Link href="/">
                <a>Feature Articles</a>
              </Link>
              <Link href="/">
                <a>About Us</a>
              </Link>
              <Link href="/">
                <a>In the press</a>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box
              sx={{
                color: "#fff",
                "*": {
                  display: "block",
                  my: "12px",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  mt: 2,
                  fontSize: { xs: "1.5rem", sm: "1.8rem" },
                  fontWeight: "bold",
                }}
              >
                Start Talking
              </Typography>
              <Link href="/">
                <a>Contact Us</a>
              </Link>
              <Link href="/">
                <a>Brand Partner</a>
              </Link>
              <Link href="/">
                <a>Associates</a>
              </Link>
              <Link href="/">
                <a>The Dopton App</a>
              </Link>
              <Link href="/">
                <a>DoptonPro Pricing</a>
              </Link>
              <Link href="/">
                <a>Dopton Pricing</a>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box
              sx={{
                color: "#fff",
                "*": {
                  display: "block",
                  my: "12px",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  mt: 2,
                  fontSize: { xs: "1.5rem", sm: "1.8rem" },
                  fontWeight: "bold",
                }}
              >
                Usefull Links
              </Typography>
              <Link href="/">
                <a>International Students</a>
              </Link>
              <Link href="/">
                <a>Nus Extras</a>
              </Link>
              <Link href="/">
                <a>Student Discounts</a>
              </Link>
              <Link href="/">
                <a>Proof of Age ID</a>
              </Link>
              <Link href="/">
                <a>Am I Eliegible</a>
              </Link>
              <Link href="/">
                <a>Coupon n Cashback</a>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box
              sx={{
                color: "#fff",
                "*": {
                  my: "12px",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  mt: 2,
                  fontSize: { xs: "1.5rem", sm: "1.8rem" },
                  fontWeight: "bold",
                }}
              >
                Be Social
              </Typography>
              <Link href="/">
                <a>
                  <FacebookOutlinedIcon
                    sx={{
                      fontSize: "4rem",
                      height: "40px",
                      width: "40px",
                      padding: ".1em",
                      borderRadius: "50%",
                      bgcolor: "#fff",
                      color: "primary.main",
                      mx: "5px",
                    }}
                  />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <InstagramIcon
                    sx={{
                      fontSize: "4rem",
                      height: "40px",
                      width: "40px",
                      padding: ".1em",
                      borderRadius: "50%",
                      bgcolor: "#fff",
                      color: "primary.main",
                      mx: "5px",
                    }}
                  />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <YouTubeIcon
                    sx={{
                      fontSize: "4rem",
                      height: "40px",
                      width: "40px",
                      padding: ".1em",
                      borderRadius: "50%",
                      bgcolor: "#fff",
                      color: "primary.main",
                      mx: "5px",
                    }}
                  />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <TwitterIcon
                    sx={{
                      fontSize: "4rem",
                      height: "40px",
                      width: "40px",
                      padding: ".1em",
                      borderRadius: "50%",
                      bgcolor: "#fff",
                      color: "primary.main",
                      mx: "5px",
                    }}
                  />
                </a>
              </Link>
              <Box sx={{ my: 0 }}>
                <Image
                  src="/assets/imgs/icons/nus-logo.svg"
                  width="120px"
                  height="55px"
                  alt="nus logo"
                />
              </Box>
              <Typography sx={{ my: 0 }}>
                DOPTON is the only student discount, proof of age ID and campus
                life card and platform recommended by the National Union of
                Students.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
