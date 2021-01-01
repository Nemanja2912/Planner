import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import EventsList from "./EventsList";
import AddButton from "./AddButton";

const EventsPage = () => {
  const [value, setValue] = useState(new Date());

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return (
    <div style={{ paddingBottom: 150 }}>
      <Calendar
        onClickDay={(value, event) => setValue(new Date(value))}
        value={value}
        tileDisabled={({ activeStartDate, date, view }) => date < yesterday}
        showFixedNumberOfWeeks
      />
      {localStorage.getItem("events") !== null && <EventsList />}
      <AddButton path="/AddEvent" />
    </div>
  );
};

export default EventsPage;
