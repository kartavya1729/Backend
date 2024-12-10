
function CreateError(status,message) {
    let error = new Error();
    error.status = status; // status code
    error.message = message; // message for res.send
    return error;
}


function ErrorHandler(err,req,res,next) {
    console.log(err.status);

    let statuscode = err.status || 500;
    let message = err.message || "Internal Server error";

    res.status(statuscode);
    res.send(message);

    // if(err.status){
    //     res.status(err.status);
    //     res.send(err.message)
    // }
    //     // res.send("Server side error");
    // else {
    //     err.status = 500;
    //     res.status(ere.status);
    //     res.send("Internal Server Error");
    // }
    // next();
}


module.exports = {
    ErrorHandler,
    CreateError
};