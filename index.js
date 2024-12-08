const express = require("express");

const data = require("./data.json");

const fs = require("fs");

let app = express();

app.use(express.urlencoded({extended:false}));

// 1 Create
// 2 Read


// 3 Update
app.put("/update/:id",(req,res)=>{
    let userID = req.params.id;

    let {name,email,password} = req.body;

    let database = data; // array of user data

    let indexofuser = database.findIndex((elm)=>elm.id == userID);
    if (indexofuser >= 0)
        {
        let user = database[indexofuser]; // user data
        let id = user.id;
        database[indexofuser] = {
            id : id,
            name : name,
            email : email,
            password : password
        }

        let stringified = JSON.stringify(database);

        fs.writeFile("data.json",stringified,(err)=>{
            if(err) console.log(err);

            else{
                res.send(database[indexofuser]);
            }
        })
    }

    else{
        res.send(`404 : NOT FOUND! ${userID} : ID not found`)
    }
    
    // res.send("Put request recieved");
});


// update one
app.patch("/update-one/:userID",(req,res)=>{
    let userID = req.params.userID;
    let name = req.query.name;

    let database = data;

    let indexofuser = database.findIndex((elm)=> elm.id == userID);
    if(indexofuser >= 0)
    {
        database[indexofuser].name = name;

        let stringified = JSON.stringify(database);
        fs.writeFile("data.json",stringified,(err)=>{
            if(err) console.log(err);
            else{
                res.send(database[indexofuser]);
            }

        })
    }
    else{
        res.send(`404 : NoT FOUND !! ${userID} not found`);
    }
    // res.send(`Patch request Recieved ${name}`);
});

// 4 Delete
app.delete("/delete/:userID",(req,res)=>{
    let userID = req.params.userID;

    let database = data;

    let indexofuser = database.findIndex((elm)=> elm.id == userID);

    if(indexofuser >= 0)
    {
        let filter = database.filter((elm)=> elm.id != userID);

        let stringified = JSON.stringify(filter);
        fs.writeFile("data.json",stringified,(err)=>{
            if(err) console.log(err);
            else{
                res.send(`Requested ${userID} removed from database`)
            }
        });
    }
    else{
        res.status(404); // informing browser about status code in response
        res.send(`404 : NOT FOUND ${userID} : NOT FOUND`);
    }
});

const port = 1234;
app.listen(port,(err)=>{
    if (err) console.log(err);
    else{
        console.log(`Server is running on Port : ${port}`)
    }
})