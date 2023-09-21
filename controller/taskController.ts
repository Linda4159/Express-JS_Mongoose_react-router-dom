import taskModel from "../model/taskModel"
import express,{Request,Response} from "express"

const createTask = async(req:Request,res:Response):Promise<Response>=>{
    try{
const {taskName,des} =req.body
const currentDate = new Date()
const year = currentDate.getFullYear()
const month = currentDate.toLocaleString("en-us",{month:"long"})
const day = currentDate.toLocaleString("en-us",{day:"2-digit"})
const taskData:any = await taskModel.create({
    taskName,
    des,
    date:day +" " + month + " "+ year
})
return res.status(201).json({
    message:"task created",
    data:taskData
})
    }catch(error){
        return res.status(404).json({
            message:"error creating task"
        })
    }
}

const getAllTask = async(req:Request,res:Response):Promise<Response>=>{
    try{
const data = await taskModel.find()
return res.status(200).json({
    message:"all task",
    result:data
})
    }catch(error:any){
        return res.status(404).json({
            message:error.message,
        })
    }
}
const getOneTask = async(req:Request,res:Response):Promise<Response>=>{
    try{
        const {taskId} = req.params
        const data= await taskModel.findById(taskId)
        return res.status(200).json({
            message:"single task",
            result:data
        })
    }catch(error:any){
return res.status(404).json({
    message:error.message
})
    }
}
const updateTask = async(req:Request,res:Response):Promise<Response>=>{
try{
const {done} = req.body
const {id} = req.params
const data = await taskModel.findByIdAndUpdate(
    id,
    {
        done:done
    },
    {
        new:true
    }
)
return res.status(200).json({
    message:"update succesfully",
    result:data
})
}catch(error:any){
return res.status(404).json({
    message:error.message
})
}
}
const deleteTask = async(req:Request,res:Response):Promise<Response>=>{
    try{
    const {done} = req.body
    const {id} = req.params
    const data = await taskModel.findByIdAndRemove(id)
    return res.status(200).json({
        message:"delete succesful",
        result:data
    })
    }catch(error:any){
    return res.status(404).json({
        message:error.message
    })
    }
    }
export {createTask,getAllTask,getOneTask,updateTask,deleteTask}