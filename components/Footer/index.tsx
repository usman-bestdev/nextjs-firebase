import React from "react";
import { Box, Typography } from "@material-ui/core";
import Link from "next/link";
import useStyles from "./styles";

const solutions = [
  "DevOps Automation",
  "Out of the Box Compliance",
  "SOC 2 Certification",
  "Deploy on the Edge",
  "Cloud Migration",
  "AWS Well-Architected Review",
  "DevOps-as-a-Service",
];
const resources = [
  "Documentation",
  "Customer Stories",
  "Videos",
  "Webinars",
  "White Papers",
];
const company = [
  "About us",
  "Blog",
  "Contact us",
  "Careers",
  "Events",
  "News and Press",
  "Privacy Policy",
  "Cookie Policy",
];
const location = ["2150 N 1st St", "San Jose, CA 95131", "+1 (866) 830-6588"];

function liElement(liElementsArray: string[]) {
  const classes = useStyles();
  return (
    <>
      {liElementsArray.map((element, index) => {
        return (
          <Link key={index} href={"/"}>
            <li className={classes.li}>{element}</li>
          </Link>
        );
      })}
    </>
  );
}
function Footer() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.innerDiv}>
          <Box className={classes.solutions}>
            <ul className={classes.ul}>
              <Typography variant="h2">Solution</Typography>
              {liElement(solutions)}
            </ul>
          </Box>
          <Box className={classes.resources}>
            <ul className={classes.ul}>
              <Typography variant="h2">Resources</Typography>
              {liElement(resources)}
            </ul>
          </Box>
        </Box>
        <Box className={classes.innerDiv}>
          <Box className={classes.company}>
            <ul className={classes.ul}>
              <Typography variant="h2">Company</Typography>
              {liElement(company)}
            </ul>
          </Box>
          <Box className={classes.location}>
            <ul className={classes.ul}>
              <Typography variant="h2">Location</Typography>
              {liElement(location)}
            </ul>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
