import mongoose from 'mongoose'

const marksSchema = new mongoose.Schema({
    subjects:{
        type: String,
        required: true
    },
   marks:{
       type:String,
       required:true
   },
   studentID:[
       {
       type:mongoose.SchemaTypes.ObjectId,
       ref:'Students'
   }
],
subjectID:[
    {
    type:mongoose.SchemaTypes.ObjectId,
    ref:'FacultySubjects'
}
],
AcadamicYear:[
    {
    type:mongoose.SchemaTypes.ObjectId,
    ref:'AcadamicYears'
}
],
totalmarks:{
     type:String,
     required:true
}
}, {
    timestamps: true
});

const model = mongoose.model('marks', marksSchema)

export default model