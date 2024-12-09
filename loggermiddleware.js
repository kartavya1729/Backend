// loggerMiddleware.js
const fs = require('fs');

const loggerMiddleware = (req, res, next) => {
    const log = `${new Date().getTime()} - ${req.method} - ${req.url}`;
    console.log(log);
    req.log = log;
    fs.writeFile("logger.txt", log + "\n", { flag: "a" }, (err) => {
        if (err) {
            console.log(err);
        } else {
            next();
        }
    });
};

module.exports = loggerMiddleware;
