import { Button } from "@mui/material";
import React from "react";

interface Props {
  text: string;
  icon?: JSX.Element;
  margin?: string;
}

const ButtonPrimaryLight = ({ icon, text, margin }: Props) => {
  return (
    <Button
      sx={{
        padding: "0.5em 1.2em",
        border: "1px solid #0281EF",
        background: "#fff",
        m: `${margin}`,
        boxShadow: "none",
        transition: "0.3s",
        textTransform: "none",
        "&:hover": {
          background: "#0281EF",
          color: "#fff",
        },
      }}
    >
      {text} {icon}
    </Button>
  );
};

export default ButtonPrimaryLight;
