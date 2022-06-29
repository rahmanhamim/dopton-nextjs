import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import ButtonPrimary from "components/shared/ButtonPrimary";
import ButtonSecondary from "components/shared/ButtonSecondary";
import Image from "next/image";
import React from "react";

const SignUpSection = () => {
  const profileCardData = [
    {
      icon: "/assets/imgs/icons/profile-svg-icon.svg",
      title: "Registration",
      text: "Amet minim mollit non deserunt ullam minim.",
      background: "linear-gradient(95.76deg, #0082f0 1.61%, #6fb6f6 96.04%)",
    },
    {
      icon: "/assets/imgs/icons/carg-svg-case.svg",
      title: "Identity",
      text: "Amet minim mollit non deserunt ullam minim.",
      background:
        "linear-gradient(95.76deg,#31d3dd 1.61%,rgba(90, 220, 228,0.73) 96.04%)",
    },
    {
      icon: "/assets/imgs/icons/card-award-svg.svg",
      title: "Activation",
      text: "",
      button: "Verification Status",
      background: "linear-gradient(95.76deg, #0082f0 1.61%, #6fb6f6 96.04%)",
    },
  ];

  const redeemCardData = [
    {
      img: "/assets/imgs/amazon-logo.png",
      text: "Redeem With Dopton",
    },
    {
      img: "/assets/imgs/kfc-logo.png",
      text: "Redeem With Dopton",
    },
    {
      img: "/assets/imgs/apple-logo.png",
      text: "Redeem With Dopton",
    },
    {
      img: "/assets/imgs/booking-logo.png",
      text: "Redeem With Dopton",
    },
  ];

  const sxStyles = {
    stepContainer1: {
      position: "absolute",
      textAlign: "center",
      right: { xs: "15%", sm: "18%" },
      top: "10%",
      borderRadius: "50%",
      padding: "0.5em",
      height: { xs: "60px", sm: "90px" },
      width: { xs: "60px", sm: "90px" },
      background: "#6fb6f6",
      boxShadow: "inset 16px 16px 80px #0082f0",
      border: "none",
      color: "var(--colorwhite)",
      transition: "box-shadow 300ms",
    },
    stepNumber: {
      fontSize: { xs: "1.2rem", sm: "2rem" },
      fontWeight: "bold",
      display: "block",
      marginBottom: "-12px",
    },
    stepText: {
      fontSize: { xs: ".9rem", sm: "1rem" },
      mt: { xs: "3px", sm: "none" },
    },
  };

  return (
    <Box>
      <Grid container>
        <Grid item xs={8} lg={4}>
          <Box
            sx={{
              position: "relative",
              marginLeft: "-20px",
              width: "fit-content",
            }}
          >
            <Box sx={sxStyles.stepContainer1}>
              <Typography sx={sxStyles.stepNumber}>1</Typography>
              <Typography sx={sxStyles.stepText}>Step</Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                textAlign: "center",
                right: { xs: "-9%", sm: "-6%" },
                top: "50%",
                transform: "translateY(-50%)",
                borderRadius: "50%",
                padding: "0.5em",
                height: { xs: "60px", sm: "90px" },
                width: { xs: "60px", sm: "90px" },
                background: "#6fb6f6",
                boxShadow: "inset 16px 16px 80px #0082f0",
                border: "none",
                color: "var(--colorwhite)",
                transition: "box-shadow 300ms",
              }}
            >
              <Typography sx={sxStyles.stepNumber}>2</Typography>
              <Typography sx={sxStyles.stepText}>Step</Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                textAlign: "center",
                right: { xs: "15%", sm: "18%" },
                bottom: "10%",
                borderRadius: "50%",
                padding: "0.5em",
                height: { xs: "60px", sm: "90px" },
                width: { xs: "60px", sm: "90px" },
                background: "#6fb6f6",
                boxShadow: "inset 16px 16px 80px #0082f0",
                border: "none",
                color: "var(--colorwhite)",
                transition: "box-shadow 300ms",
              }}
            >
              <Typography sx={sxStyles.stepNumber}>3</Typography>
              <Typography sx={sxStyles.stepText}>Step</Typography>
            </Box>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              style={{ maxWidth: "100%" }}
              src="/assets/imgs/signup-left-image.png"
              alt=""
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            py: 10,
            px: 1,
          }}
        >
          <Box
            sx={{
              maxWidth: "909px",
              position: "relative",
              mx: { xs: "auto", lg: "none" },
            }}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", fontSize: "2rem" }}
              >
                Sign Up
              </Typography>
              <Typography sx={{ my: 2 }}>
                At first you have to create an account by completeing the sign
                up forum.
              </Typography>
              <ButtonPrimary
                text="Join Now"
                icon={
                  <Image
                    src="/assets/imgs/joinporfile-logo.svg"
                    alt="search-logo"
                    width="16px"
                    height="16px"
                  />
                }
              />
            </Box>
            {/* complete profile */}
            <Box
              sx={{
                marginTop: "5em",
                marginBottom: "5em",
                marginLeft: "auto",
                maxWidth: "700px",
              }}
            >
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", fontSize: "2rem" }}
              >
                Complete Profile
              </Typography>
              <Typography sx={{ my: 2 }}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor.
              </Typography>
              <Grid container spacing={3}>
                {profileCardData.map((cardData, index) => (
                  <Grid item xs={8} sm={4} key={index} sx={{ mx: "auto" }}>
                    <Card
                      sx={{
                        minWidth: 190,
                        maxWidth: 240,
                        background: `${cardData.background}`,
                        height: "100%",
                        cursor: "pointer",
                        transition: "filter 300ms",
                        "&:hover": {
                          filter:
                            "drop-shadow(0px 5px 8px rgba(31, 2, 64, 0.301))",
                        },
                      }}
                    >
                      <CardContent>
                        <Box
                          sx={{
                            width: "60px",
                            height: "60px",
                            p: 1,
                            borderRadius: "50%",
                            bgcolor: "rgba(255, 253, 253, 0.226)",
                          }}
                        >
                          <Image
                            src={cardData.icon}
                            alt="search-logo"
                            width="46px"
                            height="46px"
                          />
                        </Box>
                        <Typography
                          variant="h4"
                          sx={{
                            color: "white",
                            my: 1,
                            fontSize: "1.8rem",
                          }}
                        >
                          {cardData.title}
                        </Typography>
                        <Typography sx={{ color: "white", my: 2 }}>
                          {cardData.text}
                        </Typography>
                      </CardContent>
                      {cardData?.button && (
                        <CardActions>
                          <Box
                            sx={{
                              mx: "auto",
                            }}
                          >
                            {typeof cardData.button === "string" && (
                              <ButtonSecondary text={cardData.button} />
                            )}
                          </Box>
                        </CardActions>
                      )}
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
            {/* complete profile end */}
            {/* redeem dopton */}
            <Box>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", fontSize: "2rem" }}
              >
                Redeem With Dopton
              </Typography>
              <Typography sx={{ my: 2 }}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor.
              </Typography>
              <Grid container spacing={3}>
                {redeemCardData.map((redeemCard, index) => (
                  <Grid
                    key={index}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={3}
                    item
                    sx={{ mx: "auto" }}
                  >
                    <Card
                      sx={{
                        width: "100%",
                        borderRadius: "10px",
                        cursor: "pointer",
                        transition: "filter 300ms",
                        "&:hover": {
                          filter:
                            "drop-shadow(0px 5px 8px rgba(31, 2, 64, 0.301))",
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={redeemCard.img}
                        alt="green iguana"
                      />
                      <CardContent
                        sx={{
                          padding: "7px 0 !important",
                          textAlign: "center",
                          bgcolor: "primary.main",
                        }}
                      >
                        <Typography variant="body2" color="secondary.light">
                          {redeemCard.text}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
            {/* redeem dopton end */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUpSection;
