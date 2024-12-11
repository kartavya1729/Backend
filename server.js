const express = require("express");

const db = require("./db.json");

const fs = require("fs");

const isUserPresent = require("./Middlewares/isuserpresent");

const isAuth = require("./Middlewares/auth");

const { ErrorHandler, CreateError} = require("./Middlewares/ErrorHandler");

const UnExpectedRouteHandler = require("./Middlewares/UnexpectedRoute");

let app = express();

app.use(express.urlencoded({extended:false}));

app.get("/user/:id",isUserPresent,isAuth,(req,res)=>{

    let user = req.user;

    res.send(user);
});


app.post("/create",(req,res,next)=>{

    let {name, email, password} = req.body;

    if(name && email && password){
        let database = db;
        let user = {
            id : new Date().getTime().toString().slice(6), // unique name
            name : name,
            email : email,
            password
        }
        database.push(user);

        fs.writeFile("db.json",JSON.stringify(database),(err)=>
        {
            if(err) next(err);
            else 
            {
                res.status(201);
                res.send("User Created");
            }
        })
    }

    else 
    {
        next(CreateError(406,"Provide all entries - name,email,password"));
    }
});


app.put("/update/:id", isUserPresent, isAuth, (req, res, next) => 
{
    let { name, email, password, newPassword } = req.body;
    let user = req.user;

    if (password !== user.password) 
    {
        return next(CreateError(401, "Incorrect password"));
    }

    if (name) user.name = name;
    if (email) user.email = email;
    if (newPassword) user.password = newPassword;

    fs.writeFile("db.json", JSON.stringify(db), (err) => 
    {
        if (err) next(err);
        else 
        {
            res.send("User updated successfully");
        }
});
});


app.delete("/delete/:id",isUserPresent,isAuth,(req,res,next)=>
{
    let user = req.user ;
    let database = db ;
   
    database.pop(user) ;   
    fs.writeFile("db.json", JSON.stringify(database) , (err)=> 
        {
        if(err) next(err); // now this error does not have any status code so if we look at the middleware file of errorhandler then it will send 500, internal server error
        else 
        {
            res.status(200) ;
            res.send("DATA DELETED SUCCESSFULLY") ;
       }
});
});




app.use(ErrorHandler); // Application level middleware : Error Handler.

app.use(UnExpectedRouteHandler);

const port = 8450;

app.listen(port,(err)=>{
    if(err) console.log(err);
    else console.log(`server is running on port : ${port}`);
});