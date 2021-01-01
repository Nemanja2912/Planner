import React, { useState } from "react";
import TitleInput from "./EventForm/TitleInput";
import Divider from "@material-ui/core/Divider";
import DateInput from "./EventForm/DateInput";
import AllDayCheckBox from "./EventForm/AllDayCheckbox";
import Reminder from "./EventForm/Reminder";
import Location from "./EventForm/Location";
import Contact from "./EventForm/Contact";
import Note from "./EventForm/Note";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import ErrorSnackBar from "./EventForm/ErrorSnackBar";

const AddEvent = () => {
  const [titleTextValue, setTitleTextValue] = useState("");
  const [error, setError] = useState(false);
  const [titleColorValue, setTitleColorValue] = useState("#000000");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedStartTime, setSelectedStartTime] = useState(new Date());
  const [selectedEndTime, setSelectedEndTime] = useState(new Date());
  const [currency, setCurrency] = useState("AtTime");
  const [location, setLocation] = useState("");
  const [contacts, setContact] = useState("");
  const [contactList, setContactList] = useState([]);
  const [note, setNote] = useState("");
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [check, setCheck] = useState({
    allDay: false,
    notification: false,
    location: false,
    contact: false,
    note: false,
  });

  const handleTitleInput = (e) => {
    setTitleTextValue(e.target.value);
    setError(false);
  };

  const handleLocationInput = (e) => {
    setLocation(e.target.value);
  };

  const handleNoteInput = (e) => {
    setNote(e.target.value);
  };

  const handleContactInput = (e) => {
    setContact(e.target.value);
  };

  const handleAddContact = () => {
    if (contacts === "") return;

    let id =
      contactList.length === 0 ? 0 : contactList[contactList.length - 1].id + 1;

    setContactList([
      ...contactList,
      {
        id: id,
        name: contacts,
      },
    ]);
    setContact("");
  };

  const handleRemoveContact = (id) => {
    setContactList(contactList.filter((contact) => contact.id !== Number(id)));
  };

  const handleColorInput = (e) => {
    setTitleColorValue(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleStartTimeChange = (time) => {
    setSelectedStartTime(time);
  };

  const handleEndTimeChange = (time) => {
    setSelectedEndTime(time);
  };

  const handleChangeCheckbox = (event) => {
    setCheck({ ...check, [event.target.name]: event.target.checked });
  };

  const handleChangeSelect = (event) => {
    setCurrency(event.target.value);
  };

  const handleSend = (e) => {
    if (titleTextValue === "") {
      setError(true);
      setErrorOpen(true);
      setErrorMessage("Tittle input cannot be empty");
      e.preventDefault();
      return;
    }

    if (selectedStartTime > selectedEndTime) {
      setErrorOpen(true);
      setErrorMessage("End time cannot be before start time");
      e.preventDefault();
      return;
    }

    let eventsList =
      localStorage.getItem("events") === null
        ? []
        : [...JSON.parse(localStorage.getItem("events"))];

    localStorage.setItem(
      "events",
      JSON.stringify([
        {
          title: titleTextValue,
          color: titleColorValue,
          date: selectedDate,
          allDayCheck: check.allDay,
          startTime: check.allDay ? "00:00" : selectedStartTime,
          endTime: selectedEndTime,
          reminderCheck: check.notification,
          currency: currency,
          locationCheck: check.location,
          location: location,
          contactCheck: check.contact,
          contactList: contactList,
          noteCheck: check.note,
          note: note,
        },
        ...eventsList,
      ])
    );
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErrorOpen(false);
  };

  return (
    <>
      <TitleInput
        textValue={titleTextValue}
        handleTitleInput={handleTitleInput}
        colorValue={titleColorValue}
        handleColorInput={handleColorInput}
        errorCheck={error}
      />
      <Divider light />
      <DateInput
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />
      <Divider light />
      <AllDayCheckBox
        check={check}
        handleChangeCheckbox={handleChangeCheckbox}
        selectedStartTime={selectedStartTime}
        selectedEndTime={selectedEndTime}
        handleStartTimeChange={handleStartTimeChange}
        handleEndTimeChange={handleEndTimeChange}
      />
      <Divider light />
      <Reminder
        check={check}
        handleChangeCheckbox={handleChangeCheckbox}
        currency={currency}
        handleChangeSelect={handleChangeSelect}
      />
      <Divider light />
      <Location
        value={location}
        handleLocationInput={handleLocationInput}
        check={check}
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <Divider light />
      <Contact
        value={contacts}
        handleContactInput={handleContactInput}
        check={check}
        handleChangeCheckbox={handleChangeCheckbox}
        handleAddContact={handleAddContact}
        contactList={contactList}
        handleRemoveContact={handleRemoveContact}
      />
      <Divider light />
      <Note
        value={note}
        handleNoteInput={handleNoteInput}
        check={check}
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <Divider light />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0 30px 0",
        }}
      >
        <Link style={{ textDecoration: "none" }} to="/Events">
          <Button
            variant="outlined"
            color="primary"
            style={{ marginRight: 20 }}
          >
            Cancel
          </Button>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          to="/Events"
          onClick={(e) => handleSend(e)}
        >
          <Button variant="contained" color="primary">
            Apply
          </Button>
        </Link>
      </div>
      <ErrorSnackBar
        open={errorOpen}
        handleClose={handleClose}
        errorMessage={errorMessage}
      />
    </>
  );
};

export default AddEvent;
