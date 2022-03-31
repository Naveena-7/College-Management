import mongoose from 'mongoose'

const departmentSchema = new mongoose.Schema({
    UserId:{
    type:mongoose.SchemaTypes.ObjectId,
    required:true,
    unique:true,
    ref:'Users'
    },
//  createdby:{
//      type:mongoose.SchemaTypes.ObjectId,
//      required:true,
//      ref:'Users'
//  },
    name:{
        type: String,
        required: true,
        unique: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    faculty:[
        {
        type:mongoose.SchemaTypes.ObjectId,
        ref:'faculty'
        }  
],
}, {
    timestamps: true
});

const model = mongoose.model('Departments', departmentSchema)

export default model