import { Box, Container, Grid, Typography } from "@mui/material";
import ButtonSecondary from "components/shared/ButtonSecondary";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: 'url("/assets/imgs/main-bg-svg.svg")',
        minHeight: { lg: "640px" },
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        maxWidth: "100%",
        display: { xs: "flex", lg: "block" },
        alignItems: "center",
      }}
    >
      <Container sx={{ py: { xs: 4, lg: 0 } }}>
        <Grid
          container
          spacing={0}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: { md: 2, lg: 0 },
          }}
        >
          <Grid item xs={12} lg={6}>
            <Typography
              variant="h2"
              sx={{
                color: "secondary.light",
                fontWeight: "bold",
                fontSize: { xs: "1.6rem", md: "2.5rem", lg: "2.8rem" },
              }}
            >
              JOIN &#38; GRAB 3 YEARS <br /> OF STUDENT SAVINGS
            </Typography>
            <Typography
              sx={{
                color: "secondary.light",
                my: 3,
                pr: "12px",
                maxWidth: "600px",
              }}
            >
              DOPTON members (excluding DOPTON PRO) can enjoy access to 3 years
              of exclusive student deals for the price of 2 years, get a free
              ISIC card with access to 150k international offers, free PASS
              student ID and much more.
            </Typography>
            <ButtonSecondary text="Get 3 Years of Student Sevings" />
          </Grid>
          <Grid item xs={12} lg={6} sx={{ my: { xs: 3, lg: 0 } }}>
            <Box
              sx={{
                maxWidth: {
                  xs: "300px",
                  sm: "500px",
                  md: "600px",
                  lg: "100%",
                  margin: "0px auto",
                  position: "relative",
                },
              }}
            >
              {/* tags start */}
              <Box
                sx={{
                  width: { xs: "80px", sm: "120px" },
                  position: "absolute",
                  top: "10%",
                  left: "5%",
                  zIndex: 10,
                }}
              >
                <Image
                  src="/assets/imgs/icons/tags-1.png"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  alt="tag1svg"
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "80px", sm: "130px" },
                  position: "absolute",
                  left: { xs: "-50px", sm: "-100px" },
                  bottom: "-10%",
                  zIndex: 10,
                }}
              >
                <Image
                  src="/assets/imgs/icons/tags-2.png"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  alt="tag1svg"
                />
              </Box>

              <Box
                sx={{
                  width: { xs: "80px", sm: "120px" },
                  position: "absolute",
                  top: "30%",
                  right: "3%",
                  zIndex: 10,
                }}
              >
                <Image
                  src="/assets/imgs/icons/hero-tags2.svg"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  alt="tag1svg"
                />
              </Box>
              {/* tags end */}
              {/* hero ellipse */}
              <Box
                sx={{
                  width: { xs: "50px", sm: "90px" },
                  position: "absolute",
                  right: { xs: "-4%", md: "-8%" },
                  bottom: "1%",
                  zIndex: 10,
                }}
              >
                <Image
                  src="/assets/imgs/Ellipse-2.svg"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  alt="tag1svg"
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "50px", sm: "90px" },
                  position: "absolute",
                  top: "98%",
                  left: "13%",
                  zIndex: 10,
                }}
              >
                <Image
                  src="/assets/imgs/Ellipse-3.svg"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  alt="tag1svg"
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "50px", sm: "90px" },
                  position: "absolute",
                  top: "7%",
                  right: "9%",
                  zIndex: 10,
                }}
              >
                <Image
                  src="/assets/imgs/Ellipse-4.svg"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  alt="tag1svg"
                />
              </Box>
              {/* hero ellipse end */}
              <Image
                src="/assets/imgs/hero-people-2.svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
                alt="hero-people"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
