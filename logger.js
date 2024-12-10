const fs = require("fs");

const {createError} = require("./errorHandler");

function logger(req,res,next){
      const log = `${new Date().getTime()} - ${req.method} - ${req.url}`
      console.log(log);
      req.log = log;
      fs.writeFile("logger.txt",log+"\n",{flag:"a"},(err)=>{
        if(err) next(CreateError(500,"Error Occured While maintainig logs"));

        else{
          next();
        }
      })
}

module.exports = logger;