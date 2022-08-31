import {Schema,model}  from "mongoose"

const taskSchema = new Schema({
    title:{
        type:String,
        require:true,
        trim:true
    },
    description:{
        type:String,
        trim:true
    },
    done:{
        type:Boolean,
        default:false
    },
    },{
    // se añade versionKey para evitar la creacion de _id
        versionKey:false,
        timestamps:true
})

export default model('Task',taskSchema)