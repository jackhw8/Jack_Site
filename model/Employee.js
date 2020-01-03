// Bring in Mongoose
const mongoose = require('mongoose');
// Create Schema : a blueprint that an object has to follow
const Schema = mongoose.Schema;

// Define our own employee schema
// employee has to follow these rules otherwise mongoose will give us an error
const EmployeeSchema = new Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    // job title
    job : {
        type : String,
        required : true
    },
    salary : {
        type : Number,
        required : true
    }
})

// EmployeeScehma를 모듈화 해서 내보내겠다(다른 파일에서도 EmployeeSchema를 access 할 수 있게 만들겠다)
module.exports = mongoose.model('Employee', EmployeeSchema);