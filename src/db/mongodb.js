const mongoos = require("mongoose");

const connectDB = async () => {
    try {
        await mongoos.connect("mongodb+srv://anikvohra3:123@cluster0.heqw9xn.mongodb.net/institue")
        .then(() => {
            console.log("Connected to mongodb");
        })
        .catch(() => {
            console.log("Not connected to mongodb" , error);
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB