const { CreateError } = require("./ErrorHandler");

const db = require("../db.json")

const validate = (req,res,next)=>{

    let { name, email, password } = req.body;

    if(name && password && email)
    {
        let database = db;
        let index = database.findIndex((elm)=>elm.email.toLowerCase() == email.toLowerCase())
        if(index >=0)
        {
            next(CreateError(208,"User already exsist"))
        }
        else{
            let newUser = {
                id: new Date().getTime().toString().slice(5),
                name,
                email,
                password
            }
            req.newUser = newUser;
            next();
        }
    }
    else{
        next(CreateError(416,"Not Acceptable - email name password Required"))
    }

}

module.exports = validate;