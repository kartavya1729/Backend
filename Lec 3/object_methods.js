// Object method
let obj = 
{
    a: "first",
    b:"second"
  };
// Creates an object from an existing object
let newObj = Object.create(obj)

   Object.entries(obj); // [["a","first"],["b","second"]];
   Object.keys(obj); // ["a","b"];
   Object.values(obj); //["first","second"];

// Creates an object from a list of keys/values
Object.fromEntries([["a","first"],["b","second"]]); // {'a':"first",'b':"second"}
