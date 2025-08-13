const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

require("dotenv").config();

connectDb();

const app = express();

const PORT = process.env.PORT || 1600;


app.use(express.json());
app.use('/api/contacts', require("./routes/contactRoutes"))
app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`)
})