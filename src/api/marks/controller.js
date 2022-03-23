

import marks from './model';

export const create = (req, res) => {
  marks.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const show = (req, res) =>
marks.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })

 export const index = (req, res) =>{
 sendAllmarks(res);
 }

export const searchmarks = (req, res) => {
  marks.find({gender:req.query.gender},(err,data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
}

export const search = (req, res) => {
  marks.find({qualification:req.query.qualification},(err,data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
}

export const update = (req, res) => {
  marks.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const destroy = (req, res) =>
marks.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(deletedObj);
    }
  }); 

  const sendAllmarks = (res) => {
      marks.find()
      .populate('studentID subjectID AcadamicYear')
      .then(results =>{
        res.send(results);
      })
      .catch(err=>{
        res.send(err);
      })
    }
    
    // const sendmarks = (res) => {
    //   marks.find((er, marks) => {
    //     if (!er) {
    //       res.send(marks);
    //     } else {
    //       res.send(er);
    //     }
    //   })
    // }