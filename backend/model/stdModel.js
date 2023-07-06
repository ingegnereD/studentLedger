const mongoose = require("mongoose")


const studentSchema = mongoose.Schema({
    name: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true },
    level: { type: String, required: true, trim: true },
}, { timestamp: true })


const Student = mongoose.model("Student", studentSchema)
module.exports = Student