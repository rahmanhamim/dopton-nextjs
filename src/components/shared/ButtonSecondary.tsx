import { Button } from "@mui/material";
import React from "react";

interface Props {
  text: string;
  padding?: string;
  fontSize?: string;
}

const ButtonSecondary = ({ text, padding, fontSize }: Props) => {
  return (
    <Button
      variant="contained"
      sx={{
        padding: padding || "0.5em 2em",
        fontSize: fontSize || ".9rem",
        border: "none",
        textTransform: "none",
        boxShadow: "none",
        backgroundImage:
          "linear-gradient(95.19deg, #31d3dd -2.45%, #75e2e8 100%)",
        transition: "0.3s",
        backgroundSize: "200% auto",
        "&:hover": {
          backgroundPosition: "right center",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonSecondary;
