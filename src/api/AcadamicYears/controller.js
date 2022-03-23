


import AcadamicYears from './model'

export const create=(req,res)=>{
 AcadamicYears.create(req.body,(error,results) =>{
     if(results){
         res.send(results);
     }
     else{
         res.send(error);
     }
 })

}
export const get=(req,res)=>{
    sendallAcadamicYears(res)
}

export const  search = (req,res)=>{
    AcadamicYears.put({year:req.query.year},(req,res) =>{
        if(result){
            res.send(result)
        }
    })
}

export const update =(req,res) =>{
    AcadamicYears.findByIdAndUpdate(req.params.id,(req.body),{new:true},(error,updateobject)=>{
        if(updateobject){
            res.send(updateobject)
        }
        else{
            res.send(error)
        }
    })
}


export const show = (req, res) =>
  AcadamicYears.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })


  const sendallAcadamicYears = (res) => {
    AcadamicYears.find((er, faculty) => {
      if (!er) {
        res.send(faculty);
      } else {
        res.send(er);
      }
    })
  }

  export const destroy = (req, res) =>
  AcadamicYears.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(deletedObj);
    }
  }); 


