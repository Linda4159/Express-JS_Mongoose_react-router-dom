import express from "express"
import {createTask,getAllTask,getOneTask,updateTask,deleteTask} from "../controller/taskController"

const router = express.Router()

router.route("/create-task").post(createTask)
router.route("/get-all").get(getAllTask)
router.route("/get-Single/:taskId").get(getOneTask)
router.route("/update-task/:id").put(updateTask)
router.route("/deleteSingle-task/:id").delete(deleteTask)

export default router