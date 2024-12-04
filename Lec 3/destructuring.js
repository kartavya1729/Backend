// destructuring
 //object
 let sturcturedObj = 
 { 
    a:"first",
    b:"second",
    c:"third",
    d: "fouth"
  };
  
let {a:first,b:second} = sturcturedObj;

console.log({first,second});

// array desturcturing
  let [d,c] = ['name','class'];
  console.log(d,c);//