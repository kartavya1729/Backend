// higher Order functions

//function in which one or more than one function/s are passed as argument/s
// those arguments are called callbacks

// SetTimeout(()=>{},0)

const array = [1,2,3];
array.map((elm,i,array)=>{
  return 1+elm;
})

Array.prototype.myMap = myMap;//prototyping
console.log(new Array);
//polyfill of array.map() method

debugger
function myMap(cb){
    let output =[];
    for(let i=0;i<this.length;i++){
       output.push(cb(this[i],i,this));
    }
 return output;
}
array.myMap((elm) => elm+2)// return modified array

function myFilter(cb){
  let output=[];
  for(let i=0;i<this.length;i++){
    if(cb(this[i],i,this))// if true then push
        output.push(this[i]);
  }
  return output;
}
Array.prototype.myFilter = myFilter;// making myFilter an Array Method

function myReduce(cb,initialValue){
 let acc = initialValue;
 for(let i=0;i<this.length;i++){
   acc = acc?cb(acc,this[i],i,this):this[i];// checks if acc is null
 }
return acc;
}

Array.prototype.myReduce = myReduce;
console.log(new Array);