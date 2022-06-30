import { Box, Container, Grid, Typography } from "@mui/material";
import ButtonSecondary from "components/shared/ButtonSecondary";
import Image from "next/image";
import React from "react";

const MemberSection = () => {
  return (
    <Box
      sx={{
        background: "url('/assets/imgs/join-us-bg.png')",
        minHeight: "45vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "3em 1em",
        marginTop: "5em",
        marginBottom: "5em",
        color: "#fff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: "100%" }}>
              <Image
                src="/assets/imgs/join-us-image.png"
                width="100%"
                height="66%"
                layout="responsive"
                objectFit="contain"
                alt=""
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                Become a Member
              </Typography>
              <Box sx={{ my: 2 }}>
                <Typography sx={{ color: "#fff", my: 2 }}>
                  Dopton is the #1 student discount card and app giving you
                  access to huge offers on food and essentials, tech, travel and
                  home delivery. Plus fashion, beauty and a whole lot more.
                </Typography>
                <Typography sx={{ color: "#fff", my: 2 }}>
                  In-store and online, Dopton puts all the best student coupons,
                  vouchers and discounts right where you want them - in your
                  pocket.
                </Typography>
              </Box>
              <ButtonSecondary padding=".6em 5em" text="Join Dopton Today" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MemberSection;
