const express = require("express");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/CourseManagementApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("database is connected");
});

mongoose.connection.on("error", (err) => {
  console.log("database is not connected", err);
});

require("./models/CourseModules");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require("./routes/CourseModules"));

app.listen(4000, () => {
  console.log("server is listen on port 4000");
});
