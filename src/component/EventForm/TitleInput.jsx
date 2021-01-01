import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

const useStyle = makeStyles({
  title: {
    margin: 0,
    padding: 15,
    paddingTop: 25,
    backgroundColor: "#fff",
    display: "Flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const TitleInput = ({
  errorCheck,
  textValue,
  handleTitleInput,
  colorValue,
  handleColorInput,
}) => {
  const classes = useStyle();

  return (
    <div className={classes.title}>
      <div>
        <InputLabel htmlFor="title">Add title</InputLabel>
        <TextField
          error={errorCheck}
          fullWidth
          id="title"
          margin="none"
          style={{ marginRight: 25 }}
          value={textValue}
          onChange={(e) => handleTitleInput(e)}
        />
      </div>
      <input
        style={{ border: "none", outline: "none", background: "transparent" }}
        type="color"
        value={colorValue}
        onChange={(e) => handleColorInput(e)}
      />
    </div>
  );
};

export default TitleInput;
