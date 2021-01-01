import React, { useEffect } from "react";
import DashboardPreviewBox from "./DashboardPreviewBox";
import TaskProgress from "./TaskProgress";
import CustomizedProgressBars from "./ProgressBar";

const HomePage = () => {
  const parseEvent = JSON.parse(localStorage.getItem("events"));
  const eventNum = parseEvent === null ? 0 : parseEvent.length;

  const parseTask = JSON.parse(localStorage.getItem("tasks"));
  const taskNum = parseTask === null ? 0 : parseTask.length;

  const parseNotes = JSON.parse(localStorage.getItem("Notes"));
  const noteNum = parseNotes === null ? 0 : parseNotes.length;

  const sumNum = eventNum + taskNum + noteNum;

  const sumCompleted = 0;

  return (
    <div style={{ backgroundColor: "#FFF", paddingBottom: 25 }}>
      <DashboardPreviewBox
        eventNum={eventNum}
        taskNum={taskNum}
        noteNum={noteNum}
      />
      <TaskProgress sumNum={sumNum} sumCompleted={sumCompleted} />
      <CustomizedProgressBars
        color="#e55f5b"
        value={33}
        label="Calendar Events"
      />
      <CustomizedProgressBars color="#875ec6" value={11} label="To do Task" />
      <CustomizedProgressBars color="#6373c1" value={55} label="Quick Notes" />
    </div>
  );
};

export default HomePage;
