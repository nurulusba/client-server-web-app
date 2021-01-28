import React, { useState, useContext, useEffect } from "react";
import { CourseContext } from "./Context/CourseContext";
import axios from "axios";

function UniversityCourseModulePanel() {
  const [moduleName, setModuleName] = useState("");
  const [moduleCode, setModuleCode] = useState("");
  const [startDate, setStartDate] = useState("");
  const [courseName, setCourseName] = useState("");

  const { getShow, getChoose } = useContext(CourseContext);

  const handleModuleName = (e) => {
    setModuleName(e.target.value);
  };

  const handleModuleCode = (e) => {
    setModuleCode(e.target.value);
  };

  const handleStartDate = (e) => {
    setStartDate(e.target.value);
  };

  const handleCourseName = (e) => {
    setCourseName(e.target.value);
  };

  const handleClick = () => {
    document.getElementById("myForm").reset();
    if (!moduleName || !moduleCode || !startDate || !courseName) {
      alert("Details are missing");
    } else {
      alert(moduleName + " " + moduleCode + " " + startDate + " " + courseName);

      const info = {
        moduleName,
        moduleCode,
        startDate,
        courseName,
      };
      axios
        .post("courseModule", info)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      getChoose();
    }
  };

  return (
    <div id="feedback-form">
      <h2 className="header">Enter Course Details</h2>
      <div>
        <form id="myForm">
          <input
            type="text"
            name="name"
            placeholder="Module Name"
            onChange={handleModuleName}
          />
          <input
            type="text"
            name="name1"
            placeholder="Module Code"
            onChange={handleModuleCode}
          />
          <input
            type="text"
            name="name2"
            placeholder="Start Date"
            onChange={handleStartDate}
          />
          <input
            type="text"
            name="name3"
            placeholder="Course Name"
            onChange={handleCourseName}
          />

          <button
            type="button"
            class="btn btn-small"
            onClick={() => {
              handleClick();
            }}
          >
            Add
          </button>
          <button type="button" class="btn btn-small" onClick={() => getShow()}>
            Show All
          </button>
        </form>
      </div>
    </div>
  );
}

export default UniversityCourseModulePanel;
