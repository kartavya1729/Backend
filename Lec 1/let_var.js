let x=0;
var a=1;

for(x;x<5;x++){
    // let example
    setTimeout(() => 
        {
            x++;
            console.log(`This is let x ${x}`);
    }, x * 1000);
}

for(a;a<5;a++){
       // var example
    setTimeout(() => 
    {
        a++;
        console.log(`This is var a ${a}`);

}, a*1000);
}