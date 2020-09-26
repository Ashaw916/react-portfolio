import React from "react";
import AboutContent from "../components/AboutContent";

export default function CenteredGrid() {
  return (
    <div className="root" id="about">
      {/* <Grid container className="root" spacing={5}> */}
      {/* <Grid item xs={12}>
          <Grid container justify="center" spacing={5}>
            <Grid item className="center"> */}
      <AboutContent />
      {/* </Grid>
          </Grid>
        </Grid> */}
      {/* </Grid> */}
    </div>
  );
}
