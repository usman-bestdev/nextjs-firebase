import { makeStyles } from "@material-ui/core";
import React from "react";
import { useRouter } from "next/router";

const useStyle = makeStyles(() => ({
  imageStyling: {},
}));
const LogoImage = () => {
  const classes = useStyle();
  const router = useRouter();
  return (
    <img
      // imageRendering="auto"
      id="logo"
      src="duploCloudIcon.webp"
      width="200"
      height="35"
      title="Taxeezy"
      alt="Taxeezy logo"
      className={classes.imageStyling}
    />
  );
};

export default LogoImage;
