import React from "react";

const StudentCard = (props) => {
  return (
    <div className="student-card">
      <p>Name: {props.name}</p>
      <p>Starting cohort: {props.startingCohort}</p>
      <p>Current block: {props.currentBlock}</p>
    </div>
  );
};

export default StudentCard;
