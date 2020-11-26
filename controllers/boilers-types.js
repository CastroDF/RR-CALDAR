var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

const port = 3000;

app.use('/boiler-types', require('../routers/api/boiler-types.js'));

app.listen(port, () => {
    console.log(`Radium app listening at http://localhost: ${port} `);
})
