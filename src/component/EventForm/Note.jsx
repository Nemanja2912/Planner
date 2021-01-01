import React from "react";
import "date-fns";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import NotesIcon from "@material-ui/icons/Notes";

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

const Note = ({ check, handleChangeCheckbox, value, handleNoteInput }) => {
  const classes = useStyle();

  return (
    <div>
      <div className={classes.checkbox}>
        <Checkbox
          style={{ margin: 0, padding: 0 }}
          defaultChecked
          color="primary"
          inputProps={{ "aria-label": "checkbox" }}
          checked={check.note}
          onChange={handleChangeCheckbox}
          name="note"
        />
        <Typography
          variant="body1"
          style={{ marginLeft: 10, padding: 0, lineHeight: 0 }}
        >
          Add Note
        </Typography>
        <NotesIcon style={{ marginLeft: 10, opacity: "0.7" }} />
      </div>
      {check.note && (
        <div className={classes.box}>
          <InputLabel htmlFor="location">Add Note</InputLabel>
          <TextField
            style={{ marginTop: 15 }}
            id="outlined-multiline-static"
            multiline
            fullWidth
            rows={4}
            value={value}
            onChange={(e) => handleNoteInput(e)}
            variant="outlined"
          />
        </div>
      )}
    </div>
  );
};

export default Note;
