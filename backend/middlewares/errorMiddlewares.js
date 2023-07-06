const { model } = require("mongoose")
const { CustomAPIError } = require("../error/error")

const notFound = (req, res, next) => {
    const error = new Error("Page Not Found")
    res.status(200).json({ msg: "Page not found, check url" })
    next(error)
}


const errorHandlerMidware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(500).json({ msg: "Something went wrong, check url, params and code." })
}


module.exports = { notFound, errorHandlerMidware }