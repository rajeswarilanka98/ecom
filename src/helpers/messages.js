const httpStatus = require('http-status-codes');


const successResponse = (req, res, data, message, code = httpStatus.OK) => res.status(code).json({
    success: true,
    responseCode: 200,
    data,
    message
});
const successResponse1 = (req, res, data, message, len, code = httpStatus.OK) => res.status(code).json({
    success: true,
    responseCode: 200,
    data,
    message,
    len: len || {}
});

const errorResponse = (req, res, errorMessage = 'Something went wrong', code = 400, error) => res.status(code).json({
    success: false,
    responseCode: 400,
    data: [],
    error,
    message: errorMessage,
});

module.exports = {
    successResponse,
    successResponse1,
    errorResponse,
};