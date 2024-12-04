// const in array  and object

// for array
const arr = [1,2];

arr.push(3);// no error because reference is same just mutated and array are mutable

arr = [1,2];// Error

// for object
const obj = {a:'First',b:"second"};

obj.a= "Third";// no error because reference is same just mutated and object are mutable

// github.com/shivmohan-cb