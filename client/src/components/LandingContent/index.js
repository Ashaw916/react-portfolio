import React from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    height: 500,
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
    fontSize: "5rem",
  },
  jumbotron: {
    height: 800,
    textAlign: "center",
  },
  enter: {
    background: "none",

    padding: 20,
    width: 100,
    height: 20,
  },
  btntxt: {
    background: "none",
    color: "orange",
    padding: 20,
    width: 100,
    height: 20,
  },
}));

function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.jumbotron}>
      <h1 className={classes.heading}>Welcome</h1>
      <Button variant="contained" className={classes.enter} href={"#about"}>
        <p className={classes.btntxt}>Enter</p>
      </Button>
    </div>
  );
}

export default Landing;
