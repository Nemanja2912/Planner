import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import SubjectIcon from "@material-ui/icons/Subject";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    // width: 500,
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    borderTop: "1px solid hsla(0, 0%, 51%, 0.4)",
  },
});

const navList = ["Home", "Events", "Tasks", "Notes"];

export default function Navigation({ title }) {
  let navValue = navList.indexOf(title);

  const classes = useStyles();
  const [value, setValue] = React.useState(navValue);

  useEffect(() => setValue(navValue), [navValue]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/Events"
        label="Events"
        icon={<EventAvailableIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/Tasks"
        label="Tasks"
        icon={<FormatListBulletedIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/Notes"
        label="Notes"
        icon={<SubjectIcon />}
      />
    </BottomNavigation>
  );
}
