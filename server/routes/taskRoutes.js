const router = require("express").Router();
const { getAllTasks, deleteTask, createNewTask, getTaskWithId, updateTask } = require("../controllers/taskController");
const { authUser } = require("../middlewares/auth-middleware");



//TASKS || GET
router.get("/tasks", authUser, getAllTasks);

//CREATE TASK || POST
router.post("/tasks", authUser, createNewTask);

//GET TASK || GET
router.get("/tasks/:id", authUser, getTaskWithId);

//UPDATE TASK || PUT
router.put("/tasks/:id", authUser, updateTask);

//DELETE TASK || DELETE
router.delete("/tasks/:id", authUser, deleteTask);

module.exports = router;