const errormiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Backend error";
    const extradetails = err.extradetails || "Backend error";

    return res.status(status).json({message, extradetails});
};

module.exports = errormiddleware;