
function RouteHandler(...args)  // ... rest operator
{   
    console.log(args);

    let req; let res; let next; let err;

    if(args.length >= 2){
        req = args[0];
        res = args[1];
        console.log({req, res})
    }

    if(args.length >= 3){
        // name = args[0];
        // brand = args[1];
        next = args[2];
        console.log({req, res, next})
    }

    
    if(args.length === 4){
        err = args[0];
        req = args[1];
        res = args[2];
        next = args[3];
        console.log({req, res, next, err})
    }

    // console.log({
    //     req, res, next, err
    // })


    // console.log(`name - ${name}, Brand - ${brand}, Year - ${year}, Color - ${color}`);
}

module.exports = RouteHandler;