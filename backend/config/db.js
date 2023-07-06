const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()


const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {

        })
        console.log(`MongoDB connected successfully ${conn.connection.host}`.yellow.bold)
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB