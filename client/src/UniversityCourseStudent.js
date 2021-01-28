import React from 'react'


function UniversityCourseStudent({name, studentId, courseName, courseStartDate}) {
    return (
       <div style={{marginTop: "3rem", marginBottom: "2rem"}}>
           <h3> University Course Students </h3>
           <p> Student Name: {name}</p>
           <p>  Student Id: {studentId}</p>
           <p> Course Name: {courseName}</p>
           <p>  Course Start Date:  {courseStartDate}</p>

       </div>
    )
}

export default UniversityCourseStudent
