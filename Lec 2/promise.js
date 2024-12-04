//async await / Promise;
 // Promise stages
  // initial - pending
  // resolved - fullfiled
  // reject -  rejected

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved');
    }, 10000);
});

promise.then((res)=>{
  console.log(res);
});

promise.catch((err)=>{
 console.log(err);
});

promise.finally(()=>{
  console.log("Line 22 finally");
});

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














// //async await / Promise;
//  // Promise stages
//   // initial - pending
//   // resolved - fullfiled
//   // reject -  rejected

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('resolved');
//     }, 1000);
// });

// promise.then((res)=>{
//   console.log(res);
// });

// promise.catch((err)=>{
//  console.log(err);
// });

// promise.finally(()=>{
//   console.log();
// });

// let url = "https://openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02";
// async function Fetch(url){ 
//   try {  
//   const res = await fetch(url); // data agaya - got the data
//   const data = await res.json(); // 
//   // console.log(res);
//   console.log(data);
//   }catch(err){
//     console.log("prank hogaya apke sath:",err); //data nahi aya
//   }
// }

// Fetch(url);

// let firstNum = 3,secondNum = 5;

// console.log(firstNum+secondNum);