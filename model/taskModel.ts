import mongoose from "mongoose";

interface task{
    taskName:string
    des:string
    done:boolean
    data:any
}

interface iTask extends task,mongoose.Document{}
const taskSchema = new mongoose.Schema(
    {
taskName:{
    type:String,
    required:true
},
des:{
    type:String,
    require:true
},
done:{
    type:Boolean,
    default:false

},

    date:{
        type:String,
        
    }

    },
    
    {timestamps:true}
    
)
export default mongoose.model<iTask>("task",taskSchema)