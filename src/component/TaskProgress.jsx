import React from "react";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const TaskProgress = ({ sumNum, sumCompleted }) => {
  return (
    <div style={{ marginTop: 25 }}>
      <Typography variant="h6" style={{ marginBottom: 10, padding: "0 15px" }}>
        Task Progress
      </Typography>
      <Grid
        container
        style={{
          borderTop: "1px solid hsla(0, 0%, 51%, 0.2)",
          borderBottom: "1px solid hsla(0, 0%, 51%, 0.2)",
        }}
      >
        <Grid
          style={{
            padding: "15px",
            borderRight: "1px solid hsla(0, 0%, 51%, 0.2)",
          }}
          item
          xs={6}
        >
          <Typography variant="h6">{sumNum}</Typography>
          <Typography
            variant="subtitle2"
            style={{
              opacity: "0.6",
              fontSize: "12px",
            }}
          >
            Total tasks
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            padding: "15px",
          }}
        >
          <Typography variant="h6">{sumCompleted}</Typography>
          <Typography
            variant="subtitle2"
            style={{ fontSize: "12px", opacity: "0.6" }}
          >
            Completed tasks
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default TaskProgress;
