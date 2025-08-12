const express = require("express");
const { sendStatus } = require("express/lib/response");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 1600;


app.use('/api/contacts', require("./routes/contactRoutes"))

app.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`)
})