import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { LinearProgress } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: "0 15px",
  },
});

export default function CustomizedProgressBars(props) {
  const classes = useStyles();

  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 400 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: props.color,
    },
  }))(LinearProgress);

  return (
    <div style={{ marginTop: 25 }} className={classes.root}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2" style={{ color: props.color }}>
          {props.label}
        </Typography>
        <Typography variant="body2" style={{ color: props.color }}>
          {props.value}%
        </Typography>
      </div>

      <BorderLinearProgress
        style={{ marginTop: 10, width: "100%", height: 10 }}
        variant="determinate"
        value={props.value}
      />
    </div>
  );
}
