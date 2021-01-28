const mongoose = require("mongoose");

const courseModules = new mongoose.Schema({
    
   // moduleName, moduleCode, startDate, courseName
    
   moduleName: {
        type: String, 
    },
    
    moduleCode: {
        type: String,
    },
    
    startDate: {
        type: String
    },
    courseName: {
        type: String
    }
    
});

mongoose.model("Courses", courseModules);

