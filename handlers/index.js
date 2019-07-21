module.exports = {
    ...require('./employee') 
}


module.exports.notFound = (req, res, next) => {
    const err = new Error("not found, invalid request");
    err.status = 404;  
    next(err); 
};



module.exports.errors = (err, req, res, next) => {
    res.status( err.status || 500).json({
        err:err.message || "Something went wrong "
    });

};
