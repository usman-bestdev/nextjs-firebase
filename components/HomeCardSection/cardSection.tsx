import React from "react";
import useStyles from "./styles";
import { Card, CardContent } from "@material-ui/core";
import { Typography, Box, Button, Grid } from "@material-ui/core";
import { card } from "./index";
export interface props {
  data: card;
}
function CardSession(props: props) {
  const { heading, body } = props.data.attributes;

  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Card className={classes.card}>
          <Box className={classes.img}>
            <img src="about4.png" alt="" height="180px" />
          </Box>
          <CardContent>
            <Box className={classes.text}>
              <Box pb={2}>
                <Typography variant="h3">{heading}</Typography>
              </Box>
              <Box>
                <Typography variant="body1">{body}</Typography>
              </Box>
            </Box>
          </CardContent>
          <Box className={classes.gridBtn}>
            <Button variant="contained" color="primary">
              Learn More
            </Button>
          </Box>
        </Card>
      </Grid>
    </>
  );
}

export default CardSession;
