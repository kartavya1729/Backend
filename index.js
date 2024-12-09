const express = require("express");

const loggerMiddleware = require("./loggermiddleware.js"); // importing middleware

const app = express();

const newRouter = require("./router.js");

// const loggerMiddleware = require('./loggerMiddleware');

app.use(express.urlencoded({extended:false})); // Application level middleware 
// eg: app.get(),app.use(), used in  import --- true, express --- false.

app.use("/router",newRouter);

app.use(loggerMiddleware);

app.get("/get",(req,res)=>{
    const body = req.body;
    res.send(req.log);
    // res.send(body);

})

app.post("/post",(req,res)=>{
    const body = req.body;
    // res.send(req.log);
    res.send(body);

})

const port = 4050;

app.listen(port,(err)=>{
    if(err) console.log(err);
    else console.log(`Server is running on port : ${port}`)
});