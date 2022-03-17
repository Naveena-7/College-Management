import mongoose from 'mongoose'

const facultySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
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
    branch: {
        type: String,
        required: true,
        enum: ["ECE", "CSE", "EEE", "MECH", "IT","CIVIL"]
    }
}, {
    timestamps: true
});

const model = mongoose.model('faculty', facultySchema)

export default model