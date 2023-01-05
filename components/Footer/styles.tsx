import { makeStyles, Theme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: "400px",
    backgroundColor: "rgb(0, 105, 255)",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
    justifyContent: "center",
    paddingTop: "4rem",
    paddingBottom: "4rem",
  },
  ul: {
    listStyleType: "none",
    color: "white",
  },
  li: {
    paddingTop: "1rem",
    cursor: "pointer",
  },
  solutions: {
    listStyleType: "none",
    width: "250px",
    [theme.breakpoints.down("xs")]: {
      width: "180px",
    },
  },
  resources: {
    width: "250px",
    [theme.breakpoints.down("xs")]: {
      width: "180px",
    },
  },
  company: {
    width: "250px",
    [theme.breakpoints.down("xs")]: {
      width: "180px",
    },
  },
  location: {
    width: "250px",
    [theme.breakpoints.down("xs")]: {
      width: "180px",
    },
  },
  innerDiv: {
    display: "flex",
  },
}));

export default useStyles;
