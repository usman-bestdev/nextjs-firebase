import React, { useState } from "react";
import Styles from "./styles";
import { Box, Typography, Button } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

function HomeBanner() {
  const classes = Styles();

  const [showNotification, setShowNotification] = useState(true);

  function closeNotification() {
    setShowNotification(false);
  }
  return (
    <>
      {showNotification && (
        <Box className={classes.notification}>
          <Box className={classes.notificationText}>
            <Typography variant="h4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.?
            </Typography>
          </Box>
          <Box onClick={closeNotification} className={classes.notificationLogo}>
            <ClearIcon />
          </Box>
        </Box>
      )}
      <Box className={classes.root}>
        <Box className={classes.text}>
          <Box>
            <Typography variant="h2">ACCELERATE TIME TO COMPLIANCE</Typography>
          </Box>
          <Box pt={3}>
            <Typography variant="h1">DevOps-as-a-Service</Typography>
          </Box>
          <Box pt={3}>
            <Typography variant="h4">
              Give your developers self-service with our no-code / low-code
              All-in-One DevSecOps automation platform.
            </Typography>
          </Box>
          <Box className={classes.buttonDiv}>
            <Box className={classes.buttonOne}>
              <Button variant="contained" color="primary">
                PLATFORM OVERVIEW
              </Button>
            </Box>
            <Box>
              <Button variant="outlined" color="primary">
                INTRO VIDEO
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className={classes.image}>
          <img src="hosting-static-main.png" alt="" />
        </Box>
      </Box>
    </>
  );
}

export default HomeBanner;
