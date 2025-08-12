const express = require("express");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 1600;


app.use('/api/contacts', require("./routes/contactRoutes"))
app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`)
})