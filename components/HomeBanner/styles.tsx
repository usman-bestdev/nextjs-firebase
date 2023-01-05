import { makeStyles, Theme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "rgb(0, 105, 255)",
    color: "white",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "5rem",
    paddingBottom: "5rem",
  },
  text: {
    width: "35%",
    [theme.breakpoints.down("md")]: {
      width: "49%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  heading: {
    fontSize: "48px",
  },
  image: {
    width: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "5rem",
    [theme.breakpoints.down("md")]: {
      width: "45%",
      paddingLeft: 0,
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      paddingLeft: 0,
    },
    [theme.breakpoints.down("sm")]: {
      width: "98%",
      paddingLeft: 0,
    },
  },
  buttonDiv: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "3rem",
  },
  notification: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(0, 44, 155)",
    transition: "1s ease",
    paddingLeft: "3%",
    paddingRight: "3%",
    paddingTop: "8px",
    paddingBottom: "8px",
    boxShadow: "rgb(3 27 78 / 60%) 0px 2px 4px ",
    cursor: "pointer",
  },
  notificationText: {
    color: "white",
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  notificationLogo: {
    width: "10%",
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
  },
  buttonOne: {
    marginRight: "1rem",
  },
}));

export default useStyles;
