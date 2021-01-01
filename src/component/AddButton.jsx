import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles({
  button: {
    padding: 0,
    position: "fixed",
    bottom: 75,
    right: 15,
  },
});

const AddButton = ({ path }) => {
  const classes = useStyles();

  return (
    <Link to={path}>
      <Fab color="primary" className={classes.button} aria-label="add">
        <AddIcon />
      </Fab>
    </Link>
  );
};

export default AddButton;
