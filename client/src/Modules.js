import React, { useContext, useEffect, useState } from "react";
import { CourseContext } from "./Context/CourseContext";
import axios from "axios";

function Modules() {
  const { show, choose } = useContext(CourseContext);

  const [courses, setCourses] = useState();

  useEffect(() => {
    axios
      .get("allcourses")
      .then((res) => {
        console.log(res.data.doc);
        setCourses(res.data.doc);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [choose]);

  return show === true ? (
    <>
      <div style={{ marginTop: "2rem" }}>
        <h3>All Modules</h3>
      </div>
      {courses.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Module Name</th>
                <th>Module Code</th>
                <th>Start Date</th>
                <th>Course Name</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((i, index) => {
                return (
                  <tr>
                    <td data-column="Module Name">{i.moduleName}</td>
                    <td data-column="Module Code"> {i.moduleCode}</td>
                    <td data-column="Start Date">{i.startDate}</td>
                    <td data-column="Course Name">{i.courseName}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        "Nothing Is Here"
      )}
    </>
  ) : (
    ""
  );
}

export default Modules;
