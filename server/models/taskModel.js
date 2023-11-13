const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter a title"]
    },

    description: {
        type: String,
        required: [true, "Please enter a description"]
    }
    ,
    dueDate: {
        type: String,
        required: [true, "Please enter due date"]
    },
    priority: {
        type: String,
        default: "Medium",
        required: [true, "Please enter the priority"]
    },
    status: {
        type: String,
        default: "Pending"
    }
})

const taskModel = mongoose.model("Tasks", taskSchema)

module.exports = taskModel;