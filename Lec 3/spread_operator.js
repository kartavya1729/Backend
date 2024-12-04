// spread operator  (...)
 // implementation in Array

 let arr = [1,2,3,4,5];
 let newArr = [6,7,8,9];

 //without spread operator
 let combinedArray = [arr,newArr]; //[[1,2,3,4,5],[6,7,8,9]]

 //with spread operator
 let combinedArr = [...arr,...newArr];// [1,2,3,4,5,6,7,8,9]
  console.log("spreading Array : ", {"without" : combinedArray,"with" : combinedArr});

 // implementation in object
 let obj = {a:"first",b:"second"};
 let newObj = {c:"third",d: "fouth"};
 
// without spread operator
 let combinedObject = {obj,newObj};

 // {{a:"first",b:"second"},{c:"third",d: "fouth"}}  
 //with spread operator

 let combinedObj = {...obj,...newObj};
 // {a:"first",b:"second",c:"third",d: "fouth"}
 
 console.log("spreading Object : ", {"without" : combinedObject,"with" : combinedObj});