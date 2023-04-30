import React from "react";
import "../../CSS/schedule.css";
import { ReactComponent as RightArrow } from "../../SVGs/RightArrow.svg";

const Schedule = () => {
  const data = [
    {
      meetingTitle: "Meeting with suppliers from Kuta Bali",
      time: "14.00-15.00",
      location: "at Sunset Road, Kuta, Bali",
      color: "#9BDD7C",
    },
    {
      meetingTitle: "Check operation at Giga Factory 1",
      time: "18.00-20.00",
      location: "at Contral Jakarta",
      color: "#6972C3",
    },
  ];
  return (
    <>
      <div className="scheduleContainer">
        <div className="innerScheduleContainer">
          <div className="scheduleTitle">Today's Schedule</div>
          <div className="seeAllContainer">
            <div className="seeAll">See All</div>
            <RightArrow />
          </div>
        </div>
        <div className="outerMeetingContainer">
          {data.map((item, index) => (
            <div className="meetingContainer" key={index}>
              <div
                className="sideRectangle"
                style={{ backgroundColor: item.color }}
              ></div>
              <div>
                <div className="meetingTitle">{item.meetingTitle}</div>
                <div className="meetingTime">{item.time}</div>
                <div className="meetingLocation">{item.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Schedule;
