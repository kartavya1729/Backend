// Global Execution Context
// debugger

function fun()
{
    return "fun";
}

var x = 2;
let y = 4;
const z = 6;

// Function Execution Context

function FEC()
{
    var b = 20;
    let a = 10;
    const c = 30;

    function FEC2()
{
    var d = 40;
    let e = 20;
    const f = 60;
}
FEC2();
}
FEC();






