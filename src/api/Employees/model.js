import mongoose from 'mongoose'

const EmployeesSchema = new mongoose.Schema({

    userID:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Users',
        required:true,
        unique:true
        },
        
    name:{
        type: String,
        required: true
    },
    EmployeesType:{
       type:String,
       enum:["Teaching","Non-Teaching"],
       required:true
    },
    desgination:{
        type: String,
        required: true
    },
    qualification:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true,"Email is required"],
        unique: [true,"Email must be unique"],
        validate: {
            validator: (value) => {
                return String(value)
                        .toLowerCase()
                        .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        );
            },
            message: "Please enter valid email"
        }
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female", "Others"]
    },
    createdBy:{
            type:mongoose.SchemaTypes.ObjectId,
            ref:'Users',
            required:true
            },
}, {
    timestamps: true
});

const model = mongoose.model('Employees', EmployeesSchema)

export default model