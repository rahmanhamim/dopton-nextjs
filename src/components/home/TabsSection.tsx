import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ width: "100%" }}
    >
      {value === index && (
        <Box
          sx={{
            pl: { xs: 0, md: 3 },
            height: "100%",
            width: "100%",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabsSection = () => {
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabApiItems = [
    {
      title: "Hotel & Travel",
      iconSrc: "/assets/imgs/icons/hotel-travel.svg",
      imgSrc: "/assets/imgs/tab-imgs/urban-img2.png",
    },
    {
      title: "Technology",
      iconSrc: "/assets/imgs/icons/technology.svg",
      imgSrc: "/assets/imgs/tab-imgs/urban-img-4.jpg",
    },
    {
      title: "Beauty & Spas",
      iconSrc: "/assets/imgs/icons/beauty-spa.svg",
      imgSrc: "/assets/imgs/tab-imgs/urban-img-3.jpg",
    },
    {
      title: "Health & Fitness",
      iconSrc: "/assets/imgs/icons/health-fitness.svg",
      imgSrc: "/assets/imgs/tab-imgs/urban-health-fitness.jpg",
    },
    {
      title: "Home & Garden",
      iconSrc: "/assets/imgs/icons/home-garden.svg",
      imgSrc: "/assets/imgs/tab-imgs/urban-home-garden.jpg",
    },
    {
      title: "Food & Drink",
      iconSrc: "/assets/imgs/icons/food-drink.svg",
      imgSrc: "/assets/imgs/tab-imgs/urban-food-drink.jpg",
    },
    {
      title: "Automobile",
      iconSrc: "/assets/imgs/icons/automobile.svg",
      imgSrc: "/assets/imgs/tab-imgs/urban-automobile.jpg",
    },
  ];

  return (
    <Box sx={{ my: 10, position: "relative" }}>
      <Box
        sx={{ position: "absolute", top: "-15%", left: "-4%", zIndex: "-10" }}
      >
        <Image
          src="/assets/imgs/icons/tab-ellipse.svg"
          height="200px"
          width="200px"
          alt="ellipse svg"
        />
      </Box>
      <Container>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "27%" }, mb: { xs: 2, md: 0 } }}>
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleTabChange}
              aria-label="basic tabs example"
              sx={{
                bgcolor: "#F4F6F6",
                height: "100%",
                px: 2,
                py: 4,
                "& .MuiTabs-indicator": {
                  display: "none",
                },
                "& .MuiTab-root": {
                  color: "primary.dark",
                },
                "& 	.Mui-selected": {
                  color: "primary.main",
                },
                "& .MuiButtonBase-root": {
                  minHeight: "20px !important",
                  borderRadius: "3px",
                  textTransform: "none",
                  fontSize: "1rem",
                  px: 2,
                  py: "4px",
                  my: 1,
                  width: "100%",
                  justifyContent: "flex-start",
                  transition: "all 300ms",
                  "&: hover": {
                    bgcolor: "primary.main",
                    color: "secondary.light",
                  },
                },
              }}
            >
              {tabApiItems.map((item, index) => (
                <Tab
                  key={index}
                  icon={
                    <Box component="span">
                      <Image
                        src={item.iconSrc}
                        height="20px"
                        width="20px"
                        alt="tab icon"
                      />
                    </Box>
                  }
                  iconPosition="start"
                  label={item.title}
                  {...a11yProps(index)}
                />
              ))}
            </Tabs>
          </Box>

          {tabApiItems.map((item, index) => (
            <TabPanel key={index} value={value} index={index}>
              <Image
                src={item.imgSrc}
                width="100%"
                height="45%"
                layout="responsive"
                alt="urban img"
              />
            </TabPanel>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TabsSection;
