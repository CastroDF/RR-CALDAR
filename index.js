<<<<<<< HEAD
const express = require('express');
const app = express();
const port = 3000;
const getUsuarios = require('./api/usuarios.js');
//app.use(express.static('data'));

//REST API
app.get('/usuarios', function (req, res){
    res.send(getUsuarios());
})
app.listen(port, () => {
    console.log('Radium app listening at http://localhost:${port}');
})
=======
console.log("Hi");
>>>>>>> 65a603cd1c926ad68856355e1de5764cb885a750
