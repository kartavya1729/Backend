
function unexpectedRouteHandler(req,res,next){
    let route = req.url;
    res.status(404);
    res.send(`${route} NOT FOUND`);
    // next();
}

module.exports = unexpectedRouteHandler;