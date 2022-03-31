
import jwt from 'jsonwebtoken';

 const sendErrorResponse=(res,code,message)=>{
    res.status(code);
    res.send({ error:true , message});
 }

export const checkAuth = (authenticationRequired=false,requiredRoles=[])=> (req,res,next)   =>{
     console.log(authenticationRequired,requiredRoles ,'authenticationRequired,requiredRoles');
    if(authenticationRequired){
     
      const token = extractToken(req);
      if(!token){
        sendErrorResponse(res,401,"Unauthenticated  user.");
        }else{
            let User = null;
            try{
                User = jwt.verify(token ,'MY-PROJECT-KEY');
            }
           catch(err){
            sendErrorResponse(res,401,"Unauthenticated user.Invalid/Expired token.");
           }
      
           if(User){
          req.User=User; //add logged in user data in to the request sothat next function can use user data
               if(requiredRoles && requiredRoles.length > 0) {
                   if(requiredRoles.includes(User.role)){

                    next();  // Authentication passed And Authorization passed
                   }else{
                    sendErrorResponse(res,401,"You are not authorised to perform this action.");
                   }
               
               }else{
                next();  // Authentication passed but Authorization  is not needed
               }
           
           }
        //    else{
        //     sendErrorResponse(res,401,"Unauthenticated  user.");
        //    }
        }
   
    
    }else{
        next(); //No authentication And authorization needed
    }
}
    


function extractToken (req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
        return req.query.token;
    }
    return null;
}