import React from "react";
import "date-fns";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

const currencies = [
  {
    value: "AtTime",
    label: "At time of event",
  },
  {
    value: "5min",
    label: "5 minutes before",
  },
  {
    value: "10min",
    label: "10 minutes before",
  },
  {
    value: "15min",
    label: "15 minutes before",
  },
  {
    value: "30min",
    label: "30 minutes before",
  },
  {
    value: "1hour",
    label: "1 hour before",
  },
  {
    value: "2hour",
    label: "2 hours before",
  },
  {
    value: "1day",
    label: "1 day before",
  },
  {
    value: "2days",
    label: "2 days before",
  },
];

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

const Reminder = ({
  check,
  handleChangeCheckbox,
  currency,
  handleChangeSelect,
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
          checked={check.notification}
          onChange={handleChangeCheckbox}
          name="notification"
        />
        <Typography
          variant="body1"
          style={{ marginLeft: 10, padding: 0, lineHeight: 0 }}
        >
          Remind me Before
        </Typography>
        <NotificationsActiveIcon style={{ marginLeft: 10, opacity: "0.7" }} />
      </div>
      {check.notification && (
        <div className={classes.box}>
          <TextField
            id="standard-select-currency"
            fullWidth
            select
            label="Select"
            value={currency}
            onChange={handleChangeSelect}
            helperText="Please select reminder time"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      )}
    </div>
  );
};

export default Reminder;
