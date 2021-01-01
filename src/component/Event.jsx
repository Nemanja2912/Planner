import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import NotesIcon from "@material-ui/icons/Notes";

const useStyles = makeStyles({
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 15px",
    backgroundColor: "#fff",
  },

  left: {
    display: "flex",
    alignItems: "center",
  },

  info: { paddingLeft: 15 },

  color: {
    height: 12,
    width: 12,
    borderRadius: "50%",
  },
});

const Event = ({
  title,
  color,
  startTime,
  endTime,
  notificationCheck,
  locationCheck,
  contactCheck,
  noteCheck,
  allDayCheck,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <div className={classes.left}>
        <div className={classes.color} style={{ backgroundColor: color }}></div>
        <div className={classes.info}>
          <Typography variant="subtitle1">
            <p style={{ fontWeight: 600 }}>{title}</p>
          </Typography>
          <Typography variant="body2">
            {allDayCheck && "All Day"}
            {!allDayCheck &&
              `${
                startTime.getHours() < 10
                  ? "0" + startTime.getHours()
                  : startTime.getHours()
              }:${
                startTime.getMinutes() < 10
                  ? "0" + startTime.getMinutes()
                  : startTime.getMinutes()
              } -
            ${
              endTime.getHours() < 10
                ? "0" + endTime.getHours()
                : endTime.getHours()
            }:${
                endTime.getMinutes() < 10
                  ? "0" + endTime.getMinutes()
                  : endTime.getMinutes()
              }`}
          </Typography>
        </div>
      </div>
      <div style={{ opacity: "0.7" }}>
        {notificationCheck && <NotificationsActiveIcon />}
        {locationCheck && <LocationOnIcon style={{ marginLeft: 5 }} />}
        {contactCheck && <PeopleAltIcon style={{ marginLeft: 5 }} />}
        {noteCheck && <NotesIcon style={{ marginLeft: 5 }} />}
      </div>
    </div>
  );
};

export default Event;
