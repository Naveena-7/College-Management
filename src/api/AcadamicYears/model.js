
import mongoose from 'mongoose'


const AcadamicYearsSchema = new mongoose.Schema ({

    name:{
        type:String,
        required:true
    },
    StartDate:{
        type:String
    },
    EndDate:{
    type:String
    }
},
{
    timestamps:true
}
    )

    const model = mongoose.model('AcadamicYears',AcadamicYearsSchema);

      export default model