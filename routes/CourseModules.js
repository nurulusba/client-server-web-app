const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Courses = mongoose.model("Courses");

router.post("/courseModule", (req, res) => {
  const { moduleName, moduleCode, startDate, courseName } = req.body;
  const course = new Courses({
    moduleName,
    moduleCode,
    startDate,
    courseName,
  });
  course
    .save()
    .then((res) => {
      res.json({
        success: true,
      });
    })
    .catch((err) => {
      success: false;
    });
});

router.get("/allcourses", (req, res) => {
  Courses.find({})
    .then((doc) => {
      res.json({ doc });
    })
    .catch((err) => {
      success: false;
    });
});
module.exports = router;
