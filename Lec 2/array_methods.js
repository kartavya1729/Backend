// array methods

 //Array.map();
 let arr = [1,"2","3", true];
 arr.map((elm,i)=>{
   return elm + 1;
 }); // 2 "21" "31" 2;
 
 
  //Array.filter();
  
  arr.filter((elm,i)=>{
    return typeof elm !== "string"; // true or false  = true
  });// [1,true];
 
  const userData = [
     {name: "shomik"},
      {name: "shlok"},
      { name:"amit"},
      {name:"kunal"}
  ];
 
  userData.filter((elm,i)=>{//elm = elements of array, i = index of array
    if(elm.name[0]=="s" && elm.name[1]=='h')
       return false;
     else return true;
  });
 
  //Array.reduce();
  let numArray = [1,2,3,4,5,6];
 
 let sum = numArray.reduce((acc,curr,i)=>{
   return acc+curr; //0+1, 1+2 , 3+3 ,6+4, 10+5, 15+6
 }); //initail acc value = 0, if not initialize
 

 let reverse = numArray.reverse(); // return reversed array
// their are many methods of array but,
// these are discussed because these will be
// used frequently in nodejs backend building.