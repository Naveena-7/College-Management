
import { verifyToken } from '../helpers';
import Students from './model';

export const create = (req, res) => {
     const Student = req.body;
      // Student.CreatedBy = req.User.id;
    Students.create(Student, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
  }


  export const showMyProfile = (req,res) =>{
    Students.findOne({ userID : req.User.id}, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        console.log(result,req.User.id,'result')
        res.send(result);
      }
    })
  }

export const show = (req, res) =>
  Students.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })

export const index = (req, res) =>
  sendAllStudents(res);

export const searchStudent = (req, res) => {
  console.log(req.query);
  Students.find({ name: { '$regex' : req.query.string, '$options' : 'i' }}).exec((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}

export const updateprofile = (req, res) => {
  const updatedObj = {} ;
  if(req.body.name){
    updatedObj['name'] = req.body.name
  }
  if(req.body.branch){
    updatedObj['branch'] = req.body.branch
  }
  if(req.body.email){
    updatedObj['email'] = req.body.email
  }
  Students.findOneAndUpdate(req.User.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const update = (req, res) => {
  Students.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const destroy = (req, res) =>
  Students.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(deletedObj);
    }
  }); 

  const sendAllStudents = (res) => {
    Students.find((er, students) => {
      if (!er) {
        res.send(students);
      } else {
        res.send(er);
      }
    })
  }