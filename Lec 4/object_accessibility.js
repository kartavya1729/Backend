
// ways of accessing the key/value in object
const Obj = {
    a:"first",
    b:"second",
    "hello world": "Obnoxious Accesing",
    "123": "number"
}

console.log(Obj.a);// dot operator

console.log(Obj["hello world"]);// because we cannot access it with dot operator
//console.log(Obj."hello world"); // Error

const javascriptArray = {
    0: "value0",
    1: "value1"
}

console.log(javascriptArray[0]);