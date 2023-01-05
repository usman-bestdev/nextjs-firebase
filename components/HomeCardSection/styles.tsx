import { makeStyles, Theme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: "auto",
    maxWidth: "400px",
    height: "auto",
    borderRadius: "0px",
    "&:hover": {
      transform: "scale(1.1)",
      boxShadow: "5px,5px,15px rgba(0,0,0,0.6)",
      cursor: "pointer",
      transition: "0.5s ease",
    },

    transition: "0.5s ease",
  },

  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5rem",
    marginRight: "15%",
    marginLeft: "15%",
    [theme.breakpoints.down("md")]: {
      marginRight: "10%",
      marginLeft: "10%",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "8%",
      marginLeft: "8%",
    },
  },
  gridBtn: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "1.5rem",
  },
  img: {
    display: "flex",
    justifyContent: "center",
  },
  text: {
    height: "166px",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

export default useStyles;
