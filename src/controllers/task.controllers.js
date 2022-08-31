import Task from "../models/Tasks";

export const getTasks=async(req,res)=>{
    try{
        const tasks=await Task.find()
        res.json(tasks)
    }catch(error){
        res.status(500).json({
            message: `Error retrieving Task with id: ${id}`
        })
    }
}

export const postTasks=async(req,res)=>{
if(!req.body.title){
    res.status(500).json({
        message:"content cannot be empty"
    })
}
    try{
        const newTask=new Task({
            title:req.body.title,
            description:req.body.description,
            done:req.body.done ? req.body.done : false
        })
        const taskSaved=await newTask.save();
        res.json(taskSaved)
    }
 catch(error){
    res.status(500).json({
        message:error.message||"something goes wrong create the task"
    })
}
}

export const getIdTasks=async(req,res)=>{
    const id=req.params.id
    try{
    const tasksid=await Task.findById(id)
    if(!tasksid)return res
    .status(404)
    .json({message:`task with id ${id} does not exists`})
    res.json(tasksid)

} catch(error){
    res.status(500).json({
        message: `Error retrieving Task with id: ${id}`
    })
}
}

export const putTasks=async(req,res)=>{
    const id=req.params.id
    try{
    const newTask=req.body
    const tasksupdate=await Task.findByIdAndUpdate(id,newTask)  
    if(!tasksupdate)return res
    .status(404)
    .json({message:`task with id ${id} does not exists`})
    res.json({message:'Task was updated successfully'});
    }
     catch(error){
        res.status(500).json({
            message:error.message||"something goes wrong retrieving the task"
        })
    }
}

export const patchTasks=async(req,res)=>{
    const id=req.params.id
    try{
        const newTask=req.body
        const taskspatch=await Task.findByIdAndUpdate(id,newTask) 
        if(!taskspatch)return res
    .status(404)
    .json({message:`task with id ${id} does not exists`})
    res.json({message:'Task was updated successfully'});
    }catch(error){
        res.status(500).json({
            message:error.message||"something goes wrong retrieving the task"
        })
    }
}


export const deleteTasks=async(req,res)=>{
    const id=req.params.id
    try{
        const tasksDelete=await Task.findByIdAndDelete(id)
        if(!tasksDelete)return res
    .status(404)
    .json({message:`task with id ${id} does not exists`})
    res.json(tasksid)
        res.json({message:`${id} se borro correctamente`})
    }
    catch(error){
        res.status(500).json({
            message:error.message||"something goes wrong retrieving the task"
        })
    }

}

export const findAllTaks=async(req,res)=>{
    try{
    const tasks=await Task.find({done:true})
    res.json(tasks) 
    }catch(error){
        res.status(500).json({
            message:error.message||"something goes wrong retrieving the task"
        })
    }
};