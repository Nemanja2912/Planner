import React from "react";
import "date-fns";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";

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

  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  tag: {
    marginTop: 10,
    color: "#fff",
    width: "max-content",
    borderRadius: "10px",
    padding: 10,
    marginRight: 5,
  },

  contactList: {
    display: "flex",
    flexWrap: "wrap",
  },
});

const Contact = ({
  check,
  handleChangeCheckbox,
  value,
  handleContactInput,
  handleAddContact,
  contactList,
  handleRemoveContact,
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
          checked={check.contact}
          onChange={handleChangeCheckbox}
          name="contact"
        />
        <Typography
          variant="body1"
          style={{ marginLeft: 10, padding: 0, lineHeight: 0 }}
        >
          Set contacts
        </Typography>
        <PeopleAltIcon style={{ marginLeft: 10, opacity: "0.7" }} />
      </div>
      {check.contact && (
        <>
          <div className={classes.box}>
            <div className={classes.flex}>
              <div>
                <InputLabel htmlFor="contact">Set contacts</InputLabel>
                <TextField
                  style={{ marginRight: 25 }}
                  id="contact"
                  margin="none"
                  fullWidth
                  value={value}
                  onChange={(e) => handleContactInput(e)}
                />
              </div>
              <IconButton aria-label="delete">
                <GroupAddIcon onClick={handleAddContact} />
              </IconButton>
            </div>
            <div className={classes.contactList}>
              {contactList.map((contact) => (
                <Chip
                  color="primary"
                  key={contact.id}
                  id={contact.id}
                  className={classes.tag}
                  label={contact.name}
                  onDelete={() => handleRemoveContact(contact.id)}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
