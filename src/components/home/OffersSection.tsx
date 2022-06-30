import { Box, Container, Typography } from "@mui/material";
import ButtonPrimaryLight from "components/shared/ButtonPrimaryLight";
import Image from "next/image";
import React from "react";

const OffersSection = () => {
  return (
    <Box sx={{ mt: 4, mb: 100 }}>
      <Container>
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
      </Container>
    </Box>
  );
};

export default OffersSection;
