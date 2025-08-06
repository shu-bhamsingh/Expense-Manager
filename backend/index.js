const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const URL = process.env.URL;
const app = express();
const PORT = 5001 || process.env.PORT;

app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send('Hello world');
});

mongoose.connect(URL).then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log(err);
    console.log('Error connecting to the database');
});

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});