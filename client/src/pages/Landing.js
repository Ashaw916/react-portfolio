import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LandingContent from "../components/LandingContent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  center: {
    margin: "5rem",
  },
  paper: {
    margin: "5rem",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="Landing">
      <Grid container className={classes.root} spacing={5}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={5}>
            <Grid item className={classes.center}>
              <Paper className={classes.paper} elevation={1} />
              <LandingContent />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
