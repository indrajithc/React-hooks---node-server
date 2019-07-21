require('dotenv').config();

const express = require('express');

const cors = require('cors');
const bodyParser =  require('body-parser');





const mongoose = require('./models');
const handle = require('./handlers');
const routes = require('./routes');

const app = express();

const port  = process.env.PORT;





app.use(cors());
app.use(bodyParser.json());



app.get('/ipsr/', (req, res) => {
    res.json({hello: "IPSR, INDRAN IL"});
});

// app.use('/ipsr/auth', routes.auth);
app.use('/ipsr/employee', routes.employee); 

 



app.use( handle.notFound);

app.use( handle.errors);


app.listen(port, console.log(` server on port ${port}`));