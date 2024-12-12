const db = require("../db.json");
const { CreateError } = require("./ErrorHandler");

const isUserPresent = (req,res,next)=>{

    let id = req.params.id;
    let database = db;

    let index = database.findIndex((elm)=> elm.id == id); // index || -1

    if(index >=0){
        req.user = database[index]; // {id, name, password}
        next();
    }

    else{
        next(CreateError(404,"User Not found"));
    }
}

module.exports = isUserPresent;