import { Button } from "@mui/material";
import React from "react";

interface Props {
  text: string;
}

const ButtonNoBg = ({ text }: Props) => {
  return (
    <Button
      sx={{
        textTransform: "none",
        padding: "0.5em 2em",
        border: "1px solid transparent",
        transition: "border 300ms",

        "&:hover": {
          border: "1px solid #0082f0",
          bgcolor: "transparent",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonNoBg;
