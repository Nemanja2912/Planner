import React, { useState } from "react";
import event from "../image/event.png";
import task from "../image/task.png";
import note from "../image/note.png";

import { Button, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  introduction: {
    height: window.innerHeight,
    display: "grid",
    gridTemplateRows: "80% 20%",
  },

  body: {
    display: "grid",
    gridTemplateColumns: "100% 100% 100%",
    overflowX: "hidden",
  },

  bodyContent: {
    position: "relative",
    height: "100%",
    width: "100%",
    display: "grid",
    gridTemplateRows: "1fr 100px",
    transition: "1s",
  },

  backgroundImage: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginBottom: "30px",
  },

  navigation: {
    display: " flex",
    flexDirection: " column",
    justifyContent: " space-between",
    padding: " 0 15px",
    paddingTop: " 25px",
  },

  navBtn: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "15px",
    textTransform: "uppercase",
  },

  dots: {
    display: "flex",
    justifyContent: "center",
  },

  dot: {
    height: "10px",
    width: "10px",
    backgroundColor: "#828282",
    borderRadius: "50%",
    transition: "1s",
  },

  text: {
    padding: "0 15px",
  },
});

const IntroductionScreen = ({ handleIntroduction }) => {
  const classes = useStyles();

  const [boxId, setBoxId] = useState(1);

  return (
    <div className={classes.introduction}>
      <div className={classes.body}>
        <div
          className={classes.bodyContent}
          style={{ left: boxId === 1 ? "0%" : "-100%" }}
        >
          <div
            style={{ backgroundImage: `url(${event})` }}
            className={classes.backgroundImage}
          ></div>
          <div>
            <div className={classes.text}>
              <Typography align="center" variant="h6" gutterBottom>
                <b>Calendar Events</b>
              </Typography>
              <Typography align="center" variant="subtitle1">
                Quickly add your events on some specific date and never forget
                this.
              </Typography>
            </div>
          </div>
        </div>
        <div
          className={classes.bodyContent}
          style={{ left: boxId === 2 ? "-100%" : boxId === 3 ? "-200%" : "0%" }}
        >
          <div
            style={{ backgroundImage: `url(${task})` }}
            className={classes.backgroundImage}
          ></div>
          <div>
            <div className={classes.text}>
              <Typography align="center" variant="h6" gutterBottom>
                <b>To Do Task</b>
              </Typography>
              <Typography align="center" variant="subtitle1">
                Task lists help you make the most of your day and get things
                done.
              </Typography>
            </div>
          </div>
        </div>
        <div
          className={classes.bodyContent}
          style={{ left: boxId === 2 ? "-100%" : boxId === 3 ? "-200%" : "0%" }}
        >
          <div
            style={{ backgroundImage: `url(${note})` }}
            className={classes.backgroundImage}
          ></div>
          <div>
            <div className={classes.text}>
              <Typography align="center" variant="h6" gutterBottom>
                <b>Quick notes</b>
              </Typography>
              <Typography align="center" variant="subtitle1">
                Quickiest way to offload ideas, and thoughts without losing
                focus.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.navigation}>
        <div className={classes.dots}>
          <p
            style={{ backgroundColor: boxId === 1 && "#424242" }}
            className={classes.dot}
          ></p>
          <p
            style={{
              backgroundColor: boxId === 2 && "#424242",
              marginLeft: 10,
            }}
            className={classes.dot}
          ></p>
          <p
            style={{
              backgroundColor: boxId === 3 && "#424242",
              marginLeft: 10,
            }}
            className={classes.dot}
          ></p>
        </div>
        <div className={classes.navBtn}>
          {boxId === 1 ? (
            <p></p>
          ) : (
            <Button color="primary">
              <Typography
                align="center"
                variant="button"
                onClick={() => setBoxId(boxId - 1)}
              >
                Back
              </Typography>
            </Button>
          )}
          {boxId === 3 ? (
            <Button color="primary">
              <Typography
                align="center"
                variant="button"
                onClick={handleIntroduction}
              >
                Get Started
              </Typography>
            </Button>
          ) : (
            <Button color="primary">
              <Typography
                align="center"
                variant="button"
                onClick={() => setBoxId(boxId + 1)}
              >
                Next
              </Typography>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntroductionScreen;
