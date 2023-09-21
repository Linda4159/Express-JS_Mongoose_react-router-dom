import { error } from "console";
import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import taskRouter from "./router/taskRouter"


const port: Number = 4000;
const url: string = "mongodb://0.0.0.0:27017/Registration";
const app: Application = express();

app.use(express.json())

app.use("/api/v1",taskRouter)

app.get("/",async(req:Request,res:Response)=>{
    res.status(201).json({message:"api is ready"})
})

mongoose
.connect(url)
.then(()=>{
    console.log("connection has been made")
})
.catch((error)=>{
    console.log("there is an error here",error)
})

const server = app.listen(port,()=>{
    console.log("this is port",port)
}) 
process.on("unCaughtException",(error:Error)=>{
console.log("error:unCaughtException")
console.log(error)
process.exit(1)
})
process.on("unhandledRejection",(reason:any)=>{
    console.log("stop here:unhandleRejection")
    console.log(reason)
    process.exit(1)
})