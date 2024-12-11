const db = require("../db.json");

const { CreateError } = require("./ErrorHandler");

const isAuth =(req,res,next)=>{
    let { password } = req.body;

    let user = req.user;

    if(password == user.password){
        next();
    }
    else next(CreateError(401,"UnAuthorized Access"));
}

module.exports = isAuth;