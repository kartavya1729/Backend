// while
// do while
// for
// for (const elm in array) for object  for in loop
// for (const key of Object) for array
// array.forEach() for array // does not return any value
// array.map()/.filter()/.reduce() is also a loop for array returns some value

let array = [1,2,3,4,5];

for(const elm of array){
    console.log(elm);
}

let obj = {
    name: "SHlok",
    class: "G-10",
    college: "Chitkara"
}
for(const key in obj){
    console.log({"key" :key, value:obj[key]});
}

array.forEach((elm,i,array)=>{
    console.log(elm);
})