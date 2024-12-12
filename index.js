const express = require("express");

const { ErrorHandler } = require("../Lec 18/Middlewares/ErrorHandler");

const RouteHandler = require("./argumentcontrol");

const validate = require("./Middlewares/Validation");

const isUserPresent = require("./Middlewares/isuserpresent")

const isAuth = require("./Middlewares/auth");

const db = require("./db.json");

const fs = require("fs");

const app = express();

app.use(express.urlencoded({extended:false}));

// RouteHandler("request");

// RouteHandler("request", "response");

// RouteHandler("request", "response", "next");

// RouteHandler("Err","request", "response");

// RouteHandler("Err","request", "response", "next");


app.post("/signup",validate,(req,res,next)=>{
    let newUser = req.newUser;
    let database = db;
    database.push(newUser);

    fs.writeFile("db.json",JSON.stringify(database),(err)=>{
        if(err) next(err);

        else{
            res.status(201);
            res.send(`User created with user ID: ${newUser.id}`)
        }
    });
    
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


                                                                            // Delete
app.delete("/delete/:id",isUserPresent,isAuth,(req,res,next)=>
    {
        userId = req.params.id;
        let database = db;

        // let index = database.findIndex((ele)=>ele.id==userId);

        if(index>=0){
            let filter = database.filter((ele)=>ele.id!=userId);

            fs.writeFile("db.json",JSON.stringify(filter),(err)=>
                {
                if(err)
                    {
                    next(err);
                }
                else
                {
                    res.status(200);
                    res.send("Request deleted");
                }
            })
        }
        else
        {
            next(CreateError(404,"Not Found"));
        }    
    });

// car("Swift", "SUzuki", 2010, "Green");

app.use(ErrorHandler)

const port = 7415;

app.listen(port,(err)=>{
    if(err) console.log(err);
    else console.log(`server is running on Port :${port}`);
});
