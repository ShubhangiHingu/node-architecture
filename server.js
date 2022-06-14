require('dotenv').config()

const express = require('express');
const app = express();

const port = process.env.PORT || 4001;

require('./config/db');

app.use("/", (req, res) => {
    res.json({message: "Welcome to NodeJs Architecture"})
})

require('./app/routes')(app)

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})