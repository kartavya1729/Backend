// closures
function makeFunc() {
    const greet = "Hello";
   return  function displayName(name) {
     console.log( greet+" "+name);
   };
 }
 
 const myFunc = makeFunc();// my function carries returning function
 console.log(myFunc);// 
 
 myFunc("Shlok");// name 
 myFunc("shiv");//
 function PlusOne() {
   let one = 1;
   return function(no){
     return one+no;
   }
 } 
 
 const sum = PlusOne();
 console.log(sum(2));
 
 