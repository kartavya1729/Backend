const express = require("express");
const path = require("path");
const data = require("./data.json"); 
const fs = require("fs");
const app = express();

const dirname  = __dirname;
console.log(dirname);

const options = {root:path.join(dirname)};

app.use("/static",express.static(options.root)); // route access.

// express.static(options.path); middleWare

// app.get("/",(req,res)=>     // route, route handler
// {
//     // console.log(req);
//     // res.send("Hello this is home route");
//     // res.sendFile("home.html",{root:path.join(dirname)});
//     res.send({name: "Shiv", batch: "G - 10"});
// });

// app.get,app.post            Methods, verbs

let arrayDatabase = [
    {name:'Shiv',email:"someone@gmail.com",password:"somethingSecret"},
    {name:"Kartik",email:"email@yahoo.com",password:"1234324"},
    {name:"saloni",email:"eamil@eamil.com",password:"hashedPassword"}
  ]
  
  app.get("/about",(req,res)=>{
      // let param = req.params.para; // parameter accessing
      // console.log(param);
      let query = req.query;
      let name = req.query.name;
      let filtered = arrayDatabase.filter((elm,i)=> name.toLowerCase() == elm.name.toLowerCase());
      console.log(filtered[0]);
     console.log(query);//query parameters anything in url after '?'
     res.send(filtered[0])
  //  res.send(`This is paramter user requested  for about page = ${param}`)
  // res.sendFile("about.html",options);
  });

// app.get("/about",(req,res)=>     // route, route handler
// {
//     // console.log(req);
//     // res.send("Hello this is home route");
//     res.sendFile("about.html",options);
//     // res.send({name: "Shiv", batch: "G - 10"});
// });


// app.get("/:name",(req,res)=>     // route, route handler
// {
//     let queryParam = req.params.name;

//     console.log(queryParam);

//     res.send(`This is query parameter user requested = ${queryParam}`);
// });

// app.get("/about/:para",(req,res)=>     // route, route handler
// {
//     let queryPara = req.params.para; // parameter accessing

//     console.log(queryPara);

//     res.send(`This is query parameter user requested = ${queryPara}`);
// });


// app.get("/about",(req,res)=>  // route, route handler
// {
//     console.log(req.query);

//     // res.send(`This is query parameter user requested = ${queryPara}`);
// });

// app.get("*",(req,res)=>{                        // unexpected Route Handling, WildCard
//     res.sendFile("NotFound.html",options);
// });

app.get("/register",(req,res)=>{
    res.sendFile("register.html",options)//
  });
  
  app.use(express.urlencoded({extended:false}))
  
  app.post("/register",(req,res)=>{
    console.log(req.body);
    let database = data; /// accessing data.json file data
    database.push(req.body);
    let stringifyOBj = JSON.stringify(database);
    fs.writeFile("data.json",stringifyOBj,()=>{
      res.send("Post Data is saved in Database")
    })
  })

  app.get("*",(req,res)=>{ // unexpected route handling
    res.sendFile("NotFound.html",options);
  });

const Port = 5000;

app.listen(Port,(err)=>{ // port number, call back function
    if (err) console.log(err);
    else console.log(`server is running on port : ${Port}`)
})

app.get("/about",(req,res)=>  // route, route handler
{
    let query = req.query

    console.log(req.query);

    res.send(req.query);
});