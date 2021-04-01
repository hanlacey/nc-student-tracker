import React, { Component } from "react";
import { getStudents } from "../utils/api";
import StudentCard from "./StudentCard";

class StudentList extends Component {
  state = {
    students: [],
    isLoading: true,
  };

  componentDidMount() {
    getStudents().then((students) => {
      this.setState({ students: students, isLoading: false });
    });
  }
  render() {
    const { students, isLoading } = this.state;
    return (
      <div className="student-list-container">
        <h2 className="student-list-title">Current students</h2>
        <ul className="student-list">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            students.map((student) => {
              if (student.currentBlock !== "grad") {
                return (
                  <StudentCard
                    name={student.name}
                    startingCohort={student.startingCohort}
                    currentBlock={student.currentBlock}
                  />
                );
              }
            })
          )}
        </ul>
      </div>
    );
  }
}

export default StudentList;
