const express = require('express')
const color = require('colors')
const dotenv = require("dotenv")
const stdRoute = require("./route/stdRoute")
const { notFound, errorHandlerMidware } = require("./middlewares/errorMiddlewares")
const connectDB = require("./config/db")

dotenv.config()
const app = express()

// connecting controlers 
app.use(express.json())

// connect DB
connectDB()

// Routes
app.use("/api/std", stdRoute)
app.use("/api/std/:id", stdRoute)

// error Middlewares
app.use(notFound)
app.use(errorHandlerMidware)


const PORT = process.env.PORT || 5500
app.listen(PORT, console.log(`App is listening on port ${PORT}`.cyan.bold))