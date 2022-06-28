import { Button } from "@mui/material";
import React from "react";

interface Props {
  text: string;
  icon?: JSX.Element;
  margin?: string;
}

const ButtonPrimary = ({ icon, text, margin }: Props) => {
  return (
    <Button
      variant="contained"
      sx={{
        padding: "0.5em 2em",
        border: "none",
        m: `${margin}`,
        boxShadow: "none",
        backgroundImage: "linear-gradient(94.66deg, #0082f0 0%, #6fb6f6 100%)",
        transition: "0.3s",
        backgroundSize: "200% auto",
        "&:hover": {
          backgroundPosition: "right center",
        },
      }}
    >
      {icon}
      {text}
    </Button>
  );
};

export default ButtonPrimary;
