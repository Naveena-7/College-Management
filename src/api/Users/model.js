import mongoose from 'mongoose'

const UsersSchema = new mongoose.Schema({
    UserName:{
        type: String,
       
    },
    Password: {
        type: String,
       
    },
  role:{
      type:String,
      
  }
}, {
    timestamps: true
});

const model = mongoose.model('Users', UsersSchema)

export default model