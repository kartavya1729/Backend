console.log("Line 1");

setTimeout(()=>{console.log("Line 3")},0);

const promise = new Promise((resolve, reject) => {
        resolve('Line 6');
});

promise.then((res)=>{
  console.log("Line 10 Promise Response", res);
});

promise.catch((err)=>{
  console.log("Line 13 : Error");
})

console.log("Line 16");

// first priority call stack syncronious program
// second priority Microtask Queue
// last prority Task Queue

setTimeout(()=>{console.log("setTimeout")},0);

console.log('line 25')

let url = "https://openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02";
async function Fetch(url){ 
  try {  
  const res = await fetch(url); // data agaya - got the data
  const data = await res.json(); // 
  // console.log(res);
  console.log("Line 33", data);
  }catch(err){
    console.log("prank hogaya apke sath:",err); //data nahi aya
  }
}

Fetch(url);

let firstNum = 3,secondNum = 5;

console.log('Line 43', firstNum+secondNum);