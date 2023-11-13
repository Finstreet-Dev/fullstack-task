const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv").config()
const morgan = require("morgan")

const { readdirSync } = require("fs")
const database = require("./config/database.js")


const app = express();

// Middlewares (to parse Application/json & parse application/x-www-form-urlencoded)
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cors())

// Middleware for HTTP request logger
app.use(morgan('dev'))

// Routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));


// Database
mongoose.set("strictQuery", true);
database();

// PORT
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});