import React from "react";
import "date-fns";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";

const useStyle = makeStyles({
  checkbox: {
    width: "100%",
    margin: 0,
    padding: 15,
    display: "flex",
    alignItems: "center",
  },
  box: {
    margin: "1px 0",
    backgroundColor: "#fff",
    padding: "15px",
  },
});

const Location = ({
  check,
  handleChangeCheckbox,
  value,
  handleLocationInput,
}) => {
  const classes = useStyle();

  return (
    <div>
      <div className={classes.checkbox}>
        <Checkbox
          style={{ margin: 0, padding: 0 }}
          defaultChecked
          color="primary"
          inputProps={{ "aria-label": "checkbox" }}
          checked={check.location}
          onChange={handleChangeCheckbox}
          name="location"
        />
        <Typography
          variant="body1"
          style={{ marginLeft: 10, padding: 0, lineHeight: 0 }}
        >
          Add Location
        </Typography>
        <LocationOnIcon style={{ marginLeft: 10, opacity: "0.7" }} />
      </div>
      {check.location && (
        <div className={classes.box}>
          <InputLabel htmlFor="location">Add Location</InputLabel>
          <TextField
            fullWidth
            id="location"
            margin="none"
            value={value}
            onChange={(e) => handleLocationInput(e)}
          />
        </div>
      )}
    </div>
  );
};

export default Location;
