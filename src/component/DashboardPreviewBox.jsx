import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import SubjectIcon from "@material-ui/icons/Subject";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "15px",
  },
  paper: {
    padding: "15px 5px",
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  white: {
    color: "#FFF",
  },

  subtitle: {
    color: "#FFF",
    fontSize: "10px",
  },
}));

const DashboardPreviewBox = ({ eventNum, taskNum, noteNum }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Paper
            style={{ backgroundColor: "#e55f5b " }}
            className={classes.paper}
          >
            <EventAvailableIcon fontSize="large" className={classes.white} />
            <Typography className={classes.white} variant="body1">
              Events
            </Typography>
            <Typography className={classes.subtitle}>
              {eventNum} Tasks
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            style={{ backgroundColor: "#875ec6 " }}
            className={classes.paper}
          >
            <FormatListBulletedIcon
              fontSize="large"
              className={classes.white}
            />
            <Typography className={classes.white} variant="body1">
              Task
            </Typography>
            <Typography className={classes.subtitle}>
              {taskNum} Tasks
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            style={{ backgroundColor: "#6373c1 " }}
            className={classes.paper}
          >
            <SubjectIcon fontSize="large" className={classes.white} />
            <Typography className={classes.white} variant="body1">
              Notes
            </Typography>
            <Typography className={classes.subtitle}>
              {noteNum} Tasks
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardPreviewBox;
