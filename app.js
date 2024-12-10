const express = require("express");

const unexpectedRouteHandler = require("./unexpectedRoute");

const logger = require("./logger");

const { ErrorHandler , CreateError } = require("./errorHandler");

const app = express();

app.use(logger); // appli level middleware for maintaining log

// app.use(ErrorHandler); //

// let error = new Error();
//     console.log(error);

let mypassword = 123456;

app.get("/get/:password",(req,res,next)=>{

    let password = req.params.password;

    if(password == mypassword) res.send("Application level Get request successful");

    else next(CreateError(401,"Do not type it again"));
})

app.post("/post",(req,res)=>{
    res.send("Application Level Post Request");
})

app.put("/put",(req,res)=>{
    res.send("Application Level Put Request");
})

app.patch("/patch",(req,res)=>{
    res.send("Application Level Patch Request");
})

app.delete("/delete",(req,res)=>{
    res.send("Application Level Delete Request");
})

app.use(unexpectedRouteHandler); // Application Level middleware for UnexpectedRoute handling

app.use(ErrorHandler); // Application Level error handler to send error response

const port = 3333;


app.listen(port,(err)=>{
    if(err) console.log(err);
    else console.log(`Server is running on port: ${port}`);
});

