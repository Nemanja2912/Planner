import React from "react";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

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

const AllDayCheckBox = ({
  selectedStartTime,
  selectedEndTime,
  handleStartTimeChange,
  handleEndTimeChange,
  check,
  handleChangeCheckbox,
}) => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.checkbox}>
        <Checkbox
          style={{ margin: 0, padding: 0 }}
          defaultChecked
          color="primary"
          inputProps={{ "aria-label": "checkbox" }}
          checked={check.allDay}
          onChange={handleChangeCheckbox}
          name="allDay"
        />
        <Typography
          variant="body1"
          style={{ marginLeft: 10, padding: 0, lineHeight: 0 }}
        >
          All Day
        </Typography>
      </div>
      {!check.allDay && (
        <div className={classes.box}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container>
              <Grid item xs={6}>
                <KeyboardTimePicker
                  margin="none"
                  fullWidth
                  id="start-time"
                  label="Start time"
                  InputProps={{ disableUnderline: true }}
                  value={selectedStartTime}
                  onChange={handleStartTimeChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time",
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <KeyboardTimePicker
                  margin="none"
                  fullWidth
                  id="end-time"
                  label="End time"
                  InputProps={{ disableUnderline: true }}
                  value={selectedEndTime}
                  onChange={handleEndTimeChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time",
                  }}
                />
              </Grid>
            </Grid>
          </MuiPickersUtilsProvider>
        </div>
      )}
    </>
  );
};

export default AllDayCheckBox;
