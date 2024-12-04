function child()
{
    console.log("conosle of child");
    return "child"
 }
function parent()
{
    child();
    return "parent";
}

setTimeout(()=>{console.log("setTimeout with 0 milliseconds")},0)// runs after parent functon call

setTimeout(()=>{ console.log("setTimeout");},1000);// runs after parent functon call

setTimeout(()=>{console.log("settimeout 2");},2000);// runs after parent functon call

parent();