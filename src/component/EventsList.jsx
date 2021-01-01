import React from "react";
import { Typography } from "@material-ui/core";
import Event from "./Event";
import Divider from "@material-ui/core/Divider";

const EventsList = () => {
  let eventList = JSON.parse(localStorage.getItem("events")).sort(
    (x, y) => new Date(x.date) - new Date(y.date)
  );

  let dateEventList = [];

  for (let i = 0; i < eventList.length; i++) {
    let date = new Date(eventList[i].date);
    let dateString = `${
      date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
    }. ${
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1
    }, ${date.getFullYear()}`;

    if (dateEventList.includes(dateString)) {
      continue;
    }
    dateEventList.push(dateString);
  }

  return (
    <div className="event-list">
      {dateEventList.map((date, index) => {
        return (
          <div key={index}>
            <Typography align="center" style={{ padding: 15 }}>
              {date}
            </Typography>
            <Divider light />
            {eventList
              .filter(
                (x) =>
                  `${
                    new Date(x.date).getDate() < 10
                      ? "0" + new Date(x.date).getDate()
                      : new Date(x.date).getDate()
                  }. ${
                    new Date(x.date).getMonth() + 1 < 10
                      ? "0" + (new Date(x.date).getMonth() + 1)
                      : new Date(x.date).getMonth() + 1
                  }, ${new Date(x.date).getFullYear()}` === date
              )
              .sort((x, y) => new Date(x.startTime) - new Date(y.startTime))
              .map((event) => (
                <>
                  <Event
                    title={event.title}
                    color={event.color}
                    allDayCheck={event.allDayCheck}
                    startTime={new Date(event.startTime)}
                    endTime={new Date(event.endTime)}
                    notificationCheck={event.reminderCheck}
                    locationCheck={event.locationCheck}
                    contactCheck={event.contactCheck}
                    noteCheck={event.noteCheck}
                  />
                  <Divider light />
                </>
              ))}
          </div>
        );
      })}
    </div>
  );
};

export default EventsList;
