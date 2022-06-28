import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Styles from "../../styles/Toast.module.css";
import CloseIcon from "@mui/icons-material/Close";

const ToastNotification = () => {
  const [showToast, setShowToast] = useState(true);

  return (
    <>
      {showToast && (
        <Box className={Styles.mainBox}>
          <Container maxWidth="xl">
            <Typography className={Styles.toastText}>
              This website uses cookies to improve service, tailor content and
              ads. By using this website you agree to this use. See Cookie
              Policy for details.
            </Typography>
            <CloseIcon
              onClick={() => setShowToast(false)}
              className={Styles.toastCloseIcon}
            />
          </Container>
        </Box>
      )}
    </>
  );
};

export default ToastNotification;
