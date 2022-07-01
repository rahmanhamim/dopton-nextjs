import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import ButtonPrimaryLight from "components/shared/ButtonPrimaryLight";
import Image from "next/image";
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FeatureArticleSection = () => {
  const sliderRef = useRef<any>(null!);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    centerMode: true,
    centerPadding: "-27px",
    speed: 1000,
    autoplaySpeed: 3000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "-0px",
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  const sliderData = [
    {
      title: "Lessons and insights from 8 years of Pixelgrade",
      date: "May 24, 2022",
      category: "Lifestyle",
      imgSrc: "/assets/imgs/slider-imgs/slider-2-img.png",
    },
    {
      title: "Why choose a theme that looks good with WooCommerce",
      date: "May 24, 2022",
      category: "Garden",
      imgSrc: "/assets/imgs/slider-imgs/slider-3-img.png",
    },
    {
      title: "How to build a loyal community online and offline",
      date: "May 24, 2022",
      category: "Travel",
      imgSrc: "/assets/imgs/slider-imgs/slider-1-img.png",
    },
    {
      title: "How to build a loyal community online and offline",
      date: "May 24, 2022",
      category: "Travel",
      imgSrc: "/assets/imgs/slider-imgs/slider-1-img.png",
    },
  ];

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
          <Box>
            <Button
              sx={{
                bgcolor: "#E6F3FE",
                mx: 1,
                padding: ".6em 2em",
                borderRadius: "8px",
              }}
              onClick={() => sliderRef?.current?.slickPrev()}
            >
              <Image
                src="/assets/imgs/icons/left-arrow-carousel.svg"
                width="22px"
                height="15px"
                alt="arrow"
              />
            </Button>
            <Button
              sx={{
                bgcolor: "#E6F3FE",
                padding: ".6em 2em",
                borderRadius: "8px",
              }}
              onClick={() => sliderRef?.current?.slickNext()}
            >
              <Image
                src="/assets/imgs/icons/right-arrow-carousel.svg"
                width="22px"
                height="15px"
                alt="arrow"
              />
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            my: 8,
            // border: "1px solid red",
          }}
        >
          <Slider {...settings} ref={sliderRef}>
            {sliderData.map((sliderItem, index) => (
              <div key={index}>
                <Box sx={{ mx: "1px" }}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      boxShadow: "0px 0px 20px rgba(31, 2, 64, 0.08)",
                      borderRadius: "16px",
                      mx: { xs: "auto", lg: "0" },
                      px: 0,
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="340"
                      image={sliderItem.imgSrc}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Button
                        sx={{
                          bgcolor: "#31D3DD",
                          color: "#fff",
                          padding: "2px 10px",
                          borderRadius: "8px",
                          fontSize: ".8rem",
                          "&: hover": {
                            backgroundColor: "primary.main",
                          },
                        }}
                      >
                        {sliderItem.category}
                      </Button>
                      <Typography
                        variant="h6"
                        sx={{ my: 2, lineHeight: "1.3" }}
                      >
                        {sliderItem.title}
                      </Typography>
                      <Typography sx={{ color: "#66717C", fontSize: ".85rem" }}>
                        {sliderItem.date}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </div>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default FeatureArticleSection;
