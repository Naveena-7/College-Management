
import Users from './model';
import md5 from 'md5';
import jwt from 'jsonwebtoken';


export const create= (req, res) => {
  const User = { UserName :req.body.UserName ,Password : md5(req.body.Password),role:req.body.role}
  Users.create(User, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const login = (req, res) =>{
  Users.findOne({ UserName :req.body.UserName ,Password : md5(req.body.Password)},(err, result) => {
    if(err) {
      res.send(err);
    } else {
      if (result){
     
        const userTokenObj ={
          UserName :result.UserName,
          id:result._id,
          role:result.role
        };
       const token = jwt.sign(userTokenObj,'MY-PROJECT-KEY');
       res.send({error:false,token})
      }else{
        res.send ({ error:true ,message : "Invalid Login Details"})
      }
  
    }
    })
}

