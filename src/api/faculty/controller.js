

import faculty from './model';

export const create = (req, res) => {
  faculty.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const show = (req, res) =>
  faculty.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })

 export const index = (req, res) =>
  sendAllfaculty(res);

export const searchfaculty = (req, res) => {
  faculty.find({gender:req.query.gender},(err,data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
}

export const search = (req, res) => {
  faculty.find({qualification:req.query.qualification},(err,data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
}

export const update = (req, res) => {
  faculty.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const destroy = (req, res) =>
faculty.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(deletedObj);
    }
  }); 

  const sendAllfaculty = (res) => {
    faculty.find((er, faculty) => {
      if (!er) {
        res.send(faculty);
      } else {
        res.send(er);
      }
    })
  }