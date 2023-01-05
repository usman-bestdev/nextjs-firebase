import { Box, Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { alpha, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MoreIcon from "@material-ui/icons/MoreVert";
import React from "react";
import LogoImage from "./logoImage";

const useStyles = makeStyles((theme: Theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(4),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(6),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 4),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    // marginRight: "12rem",
    paddingRight: "14rem",
    [theme.breakpoints.down("md")]: {
      paddingRight: "4rem",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  navbarDropdown: {
    marginTop: "3rem",
  },
  iconServiceButton: {
    position: "absolute",
    top: 2,
    color: "white",
  },
  iconGuideButton: {
    position: "absolute",
    top: 2,
    color: "white",
  },
  navbarLinks: {
    cursor: "pointer",
    position: "relative",
    margin: ".5rem",
    fontSize: "1rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: ".2rem",
    paddingBottom: ".2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      paddingLeft: ".5rem",
      paddingRight: ".5rem",
      paddingTop: ".2rem",
      paddingBottom: ".2rem",
    },
  },
  dropdownItem: {
    marginLeft: "2rem",
    //   fontWeight: "400",
  },
  customNavBar: {
    backgroundColor: "white",
    color: "black",
    padding: ".5rem 0",
    // borderBottom: '1px solid #c9c7c7',
    height: "90px",
    display: "flex",
    justifyContent: "center",
    // position: "fixed",
  },
  signInBtn: {
    backgroundColor: "black",
    color: "white",
    border: "none",
    "&:hover": {
      backgroundColor: "rgb(102,204,153)",
      // color: 'black',
    },
    fontSize: "1rem",
  },
  duploCloudIcon: {
    paddingLeft: "10rem",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "5rem",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "1rem",
    },
  },
}));

function TopNavBar() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = <></>;

  return (
    <>
      <Box className={classes.grow}>
        <AppBar position="static" className={classes.customNavBar}>
          <Toolbar>
            <Box className={classes.duploCloudIcon}>
              <LogoImage />
            </Box>

            <Box className={classes.grow} />
            <Box className={classes.sectionDesktop}>
              <div className={classes.navbarLinks}>
                <span>Platform</span>
              </div>

              <div
                className={classes.navbarLinks}
                style={{ position: "relative" }}
              >
                <span>Pricing</span>
              </div>

              <div
                className={classes.navbarLinks}
                style={{ position: "relative" }}
              >
                <span>Solutions</span>
              </div>

              <div className={classes.navbarLinks}>
                <span>Resources</span>
              </div>

              <div className={classes.navbarLinks}>
                <span>Blog</span>
              </div>

              <Button variant="contained" color="primary">
                Get a Demo
              </Button>
            </Box>

            <Box className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </Box>
    </>
  );
}

export default TopNavBar;
