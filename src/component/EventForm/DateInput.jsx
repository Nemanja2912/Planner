import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyle = makeStyles({
  box: {
    margin: 0,
    backgroundColor: "#fff",
    padding: "15px",
  },
});

const DateInput = ({ handleDateChange, selectedDate }) => {
  const classes = useStyle();

  return (
    <div className={classes.box}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          InputProps={{ disableUnderline: true }}
          margin="none"
          id="date"
          label="Date"
          format="dd/MM/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          fullWidth
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default DateInput;
