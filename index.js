const express = require("express");

const fs = require("fs"); // importing file system

const app = express();

const data = require("./data.json"); // importing data.json file data

app.use(express.urlencoded({extended:false})); // appication level middleware

// 1 Create
app.post("/register",(req,res)=>{
    // getting user data from request
    let {name,email,password} = req.body;

    // creating userdata object
    let userData = {
        id : new Date().getTime().toString().slice(6), // unique id
        name : name,
        email : email,
        password : password
    }

    // accessing data.json into database variable
    let database = data; 

    // filering the object in database on basis of email
    let filter = database.filter((elm)=>elm.email.toLowerCase() == email.toLowerCase());
    if(filter.length > 0) {res.send(`${email} is already present in database, Please use another email`)}
    else{
        // pushing data into database
        database.push(userData);

        let stringified = JSON.stringify(database);
        
            fs.writeFile("data.json",stringified,(err)=>{
            if (err) console.log(err)
            else{
                 res.send(`user data recieved ${name}, ${email}, ${password} `);
        }
    
        })
    }

    // pushing data into database variable
    // database.push(userData);

    // let stringified = JSON.stringify(database);


    // converting user data json to sring
    // let stringified = JSON.stringify(userData);

    // creating data.json file and storing user input data
    // fs.writeFile("data.json",stringified,(err)=>{
    //     if (err) console.log(err)
    //     else{
    //          res.send(`user data recieved ${name}, ${email}, ${password} `);
    // }

    // })

    // res.send(`${name}, ${email}, ${password}`);

    // res.send("Post/Create request recieved!");
});


// 2 Read
app.get("/user/:id",(req,res)=>{
    // getting id from req paramerter
    let userID = req.params.id;
    let database = data;
    // getting index of user object data userID in data.json
    let index = database.findIndex((elm)=>elm.id==userID);
    if(index >= 0){
        let userOBJ = database[index];
        res.send(userOBJ);
    }
    else{
        res.send(`${userID} your requested data is not available, \n 404 :Not Found`);
    }
    res.send("Read request recieved!");
});



// 3 Update
app.put("/update",(req,res)=>{
    res.send("Update request recieved!");
});


// 4 Delete
app.delete("/delete",(req,res)=>{
    res.send("Delete request recieved!");
});

const port = 4567;
app.listen(port,(err)=>{
    if(err) console.log(err); // listening server on post
    else{
        console.log(`Server is running on port: ${port}`);
    }
})

