console.log(1=="1"); // true
console.log(1==="1"); //false

console.log(0 == "\t") // true
console.log(0 == "\n") // true
console.log("\t"=="\n")// false

// Type converstion 

// console.log("+'1' :", typeof '1');//NaN 

console.log([1] == [1] ); // comparision on the basis of address
console.log({} == {}); // comparision on the basis of address

let a = {name:'shiv'};
let b = a; // shallow coping.
b.name="shlok";// value of a object will be changed

console.log(a==b);//true

b.name = "shlok";

class Obj
{
  constructor()
  {
    this.name=1;
  }
}

let x= {name:'shiv'};
let y = JSON.parse(JSON.stringify(x)); // deep coping

y.name = "shlok";
console.log({y,x});
console.log(x==y)


let d = new Object();//
let e = {};//

class Student
{
    constructor(name)
    {
      this.name = name;
    }
}

let student = new Student("Shlok");
console.log(student.name);


let clas = "G10";
// object
function object()
{
  console.log(this.clas)
}

console.log(object());
