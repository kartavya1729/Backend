// console.log(fun());// fucntion

// function fun(){
//     return "function";
// }

// console.log(fun2);

// var fun2 = function(){
//     return "fun2";
// }

// console.log(fun2)

// console.log(x);//undefined

// var x = 10;

// console.log(x);//10

// var x = 20;

// console.log(x); //20

// console.log(y);//reference Error

// let y = 20;

// console.log(arrowFunction);

// const arrowFunction = () => {
//   return "arrowFunction";
// }

// // javascript by Netscape (now oracle);
// // (Europian Computer Manufaturer Assocication) Script


// //Global Excecution Context
// debugger
function fun (){
  return "fun";
}

var x = 2;
let y = 4;
const z = 6;

// Function Excecution context
function FEC(){
 var b= 20;
 let a = 10;
 const c= 30;

 function FEC2(){
  var d= 40;
  let e = 20;
  const f = 60;
 }
 FEC2();
}
FEC();