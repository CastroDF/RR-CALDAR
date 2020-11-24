const express = require('express');
const path = require('path');
const app = express();


//Body Parser MiddleWare
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//SET A STATIC FOLDER
app.use(express.static(path.join(__dirname,'public')));
app.use('/api/BoilerDF', require('./routes/api/BoilerDF'));

//PORT SETUP
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));