import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ButtonPrimary from "components/shared/ButtonPrimary";
import ButtonPrimaryLight from "components/shared/ButtonPrimaryLight";
import Image from "next/image";
import React from "react";

const OffersSection = () => {
  const offersData = [
    {
      title: "Up to 60% off Mobile & TV",
      condition: "New Users Only!",
      imgSrc: "/assets/imgs/offers/samsung.png",
    },
    {
      title: "Up to 60% off Mobile & TV",
      condition: "New Users Only!",
      imgSrc: "/assets/imgs/offers/lenovo.png",
    },
    {
      title: "Up to 60% off Mobile & TV",
      condition: "New Users Only!",
      imgSrc: "/assets/imgs/offers/asos.png",
    },
    {
      title: "Up to 60% off Mobile & TV",
      condition: "New Users Only!",
      imgSrc: "/assets/imgs/offers/myvegan.png",
    },
    {
      title: "Up to 60% off Mobile & TV",
      condition: "New Users Only!",
      imgSrc: "/assets/imgs/offers/puma.png",
    },
    {
      title: "Up to 60% off Mobile & TV",
      condition: "New Users Only!",
      imgSrc: "/assets/imgs/offers/intel.png",
    },
  ];

  return (
    <Box sx={{ my: 4, position: "relative", overflowX: "hidden" }}>
      <Box
        sx={{
          width: "198px",
          position: "absolute",
          top: "50%",
          transform: "translateY(-40%)",
          left: "-3%",
          zIndex: "-10",
        }}
      >
        <Image
          src="/assets/imgs/icons/exclusive-ellipse-left.png"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          alt="svg"
        />
      </Box>
      <Box
        sx={{
          width: "198px",
          position: "absolute",
          top: "0%",
          right: "-3%",
          zIndex: "-10",
        }}
      >
        <Image
          src="/assets/imgs/icons/exclusive-ellipse-right.png"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          alt="svg"
        />
      </Box>
      <Container>
        {/* section title start */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", fontSize: "2rem" }}
          >
            Exlusive Offers
          </Typography>
          <Box
            sx={{
              width: "30%",
              height: "2px",
              m: 2,

              backgroundColor: "#f2e6ff",
              flexGrow: 1,
            }}
          ></Box>
          <ButtonPrimaryLight
            text="View All"
            icon={
              <Image
                src="/assets/imgs/icons/arrow-icon.svg"
                alt="search-logo"
                width="10px"
                height="10px"
              />
            }
          />
        </Box>
        {/* title end */}

        <Grid container sx={{ my: 5 }} spacing={4}>
          {offersData.map((offer, index) => (
            <Grid key={index} item xs={12} sm={6}>
              <Card
                sx={{
                  maxWidth: "100%",
                  display: "flex",
                  flexDirection: { xs: "row", sm: "column", lg: "row" },
                  boxShadow: "0px 0px 20px rgba(31, 2, 64, 0.08)",
                  borderRadius: "4px",
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  // height="auto"
                  image={offer.imgSrc}
                  sx={{
                    width: { xs: "38%", sm: "100%" },
                    maxWidth: {
                      xs: "200px",
                      sm: "100%",
                      lg: "240px",
                      objectFit: "contain",
                    },
                  }}
                />
                <CardContent
                  sx={{
                    width: { xs: "58%", sm: "100%" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    p: {
                      xs: ".6em 10px !important",
                      sm: "1.5em 1em !important",
                    },
                  }}
                >
                  <CardActions sx={{ p: 0 }}>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        bgcolor: "#31D3DD",
                        boxShadow: "none",
                        borderRadius: "16px",
                        textTransform: "none",
                        p: { xs: "0px", md: "3px" },
                        "&: hover": {
                          bgcolor: "primary.main",
                        },
                      }}
                    >
                      New
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        bgcolor: "#E0DF46",
                        boxShadow: "none",
                        borderRadius: "16px",
                        p: { xs: "0px 10px", md: "3px 15px" },
                        textTransform: "none",
                        "&: hover": {
                          bgcolor: "primary.main",
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        image="/assets/imgs/icons/exclusive-btn-icon.svg"
                        sx={{ width: { xs: "10px", sm: "20px" }, mr: 1 }}
                      />
                      Exclusive
                    </Button>
                  </CardActions>
                  <Box sx={{ my: { xs: 0, sm: 1 } }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: ".8rem", sm: "1.25rem" },
                      }}
                    >
                      Up to 60% off Mobile &#38; TV
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: ".7rem", sm: "1rem" },
                      }}
                    >
                      News Users Only!
                    </Typography>
                  </Box>
                  <CardActions sx={{ p: 0 }}>
                    <Button
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        background:
                          "linear-gradient(94.66deg, #0082F0 0%, #6FB6F6 100%);",
                        fontSize: { xs: ".7rem", sm: "1rem" },
                        p: { xs: "3px 1em", sm: "0.5em 1.5em" },
                      }}
                    >
                      Redeem with dopton
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OffersSection;
