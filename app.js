const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

const app = express();

app.get('/', (req,res) => {
    res.send('Hello');
});

app.listen(7000, () => console.log('Server started at port 7000...'));