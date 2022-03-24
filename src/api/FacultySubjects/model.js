import mongoose from 'mongoose'

const FacultySubjectsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    faculty:[
        {
        type:mongoose.SchemaTypes.ObjectId,
        ref:'faculty'
        }  
],
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female", "Others"]
    },
    subjects:{
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true,
        enum: ["ECE", "CSE", "EEE", "MECH", "IT"]
    }
}, {
    timestamps: true
});

const model = mongoose.model('FacultySubjects', FacultySubjectsSchema)

export default model