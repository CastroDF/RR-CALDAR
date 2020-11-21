const express = require('express');
const app = express();
const port = 3000;
//const getUsuarios = require('./api/usuarios.js');
const users = require('./data/person-data.js');
//app.use(express.static('data'));

//REST API
/*app.get('/usuarios', function (req, res){
    res.send(getUsuarios());
})*/

app.get('/usuarios', (req, res) =>  res.json(users));


app.listen(port, () => {
    console.log('Radium app listening at http://localhost: ${port} ');
})
