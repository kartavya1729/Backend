const express = require("express");
const app = express();
const port = 3000;

app.set('view engine','ejs');  //set view engine to be used
app.set('views',"./views");  //folder address where views are stored, res has direct access to this folder

let text = "Something New for EJS"
let data = [
    {
        title:"First Title",
        email:"user1@gmail.com",
        desc:"First ejs templating"
    },
    {
        title:"Second Title",
        email:"user2@gmail.com",
        desc:"Second ejs templating"
    },
    {
        title:"Third Title",
        email:"user3@gmail.com",
        desc:"Third ejs templating"
    }
]

let links = ["about","home"];

app.get("/",(req,res)=>{
    res.render("home",{ejsData: data,ejsHeading: text,links:links})
})

let heading = "This is About"
let para = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut fugiat quos officiis tempore, impedit at. Iste repudiandae ad voluptatibus, aut sequi in necessitatibus. Cupiditate dolor in odio optio ad. Temporibus vero quas quae aspernatur amet deserunt illo ducimus quidem optio vel natus obcaecati, ipsa expedita facilis. Quaerat nihil odio expedita."


app.get("/about",(req,res)=>{
    res.render("about",{heading,para});
})

app.listen(port,()=>{
    console.log(`Server is running on port:${port}`)
})