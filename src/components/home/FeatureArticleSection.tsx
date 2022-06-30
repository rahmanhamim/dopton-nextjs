import { Box, Container, Typography } from "@mui/material";
import ButtonPrimaryLight from "components/shared/ButtonPrimaryLight";
import Image from "next/image";
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FeatureArticleSection = () => {
  // const sliderRef = useRef<any>(null!);

  // const settings = {
  //   dots: true,
  //   arrows: false,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 3000,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: false,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 0,
  //         infinite: false,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: false,
  //         dots: false,
  //       },
  //     },
  //   ],
  // };

  return (
    <Box>
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
            Featured Articles
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

        {/* <Slider {...settings} ref={sliderRef}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider> */}
      </Container>
    </Box>
  );
};

export default FeatureArticleSection;
