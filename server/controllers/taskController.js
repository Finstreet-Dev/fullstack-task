const asyncHandler = require("express-async-handler");
const Task = require("../models/taskModel.js");



//@disc Get All Tasks
//@api GET /tasks
//@access Private
exports.getAllTasks = asyncHandler(async (req, res) => {
    try {

        const allTasks = await Task.find();

        return res.status(200).json({ status: true, allTasks })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ status: false, message: error.message })
    }
})

//@disc Create New Task
//@api POST /tasks
//@access Private
exports.createNewTask = asyncHandler(async (req, res) => {

    try {

        const task = await Task.create({ ...req.body });

        return res.status(201).json({ status: true, task, message: "Task successfully created" });

    } catch (error) {
        return res.status(500).json({ status: false, error: error.message });
    }
});

//@disc Get Task With ID
//@api GET /tasks/:id
//@access Private
exports.getTaskWithId = asyncHandler(async (req, res) => {

    const { id } = req.params
    try {

        const task = await Task.findOne({ _id: id })

        return res.status(201).json({ status: true, task, message: "Task details fetched" })

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ status: false, error: error.message })
    }
})

//@disc Update Task
//@api PUT /tasks/:id
//@access Private
exports.updateTask = asyncHandler(async (req, res) => {
    const { id } = req.params

    try {

        const updatedTask = await Task.findByIdAndUpdate(id, { ...req.body }, { new: true });

        return res.status(200).json({ status: true, updatedTask, message: "Task successfully updated" })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ status: false, message: error.message })
    }
})

//@disc Delete Task
//@api DELETE /tasks/:id
//@access Private
exports.deleteTask = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {

        const removeTask = await Task.findByIdAndDelete({ _id: id });

        return res.status(200).json({ status: true, message: "Task successfully deleted" })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ status: false, message: error.message })
    }
})