const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();


const app = express();
app.use(cors())
const PORT = process.env.PORT || 8000


app.get("/", (req, res) => {
    res.send("Hello world");
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})