const express = require("express");
const routes = require("./routes/api/v1/index");
const connectDB = require("./db/mongodb")
const cors = require("cors"); 

const app = express();
app.use(cors());

app.use(express.json())


connectDB();

app.use('/api/v1' , routes)

app.listen(8080, () => {
    console.log("Server is running on 8080");
})