const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
const db = require("./app/models");
const router =require("./app/routers");

const path = require('path');
const customers = require('./data_customers/data_customers.json');
const { truncate } = require('fs');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: truncate
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
    });

app.use(express.static('public'));

app.use(router);

app.listen(port, () => {
    console.log('Server:${port} OK')
});


app.get('/customers', (request, response) => {
    response.json(customers),
    response.sendFile('../Customers/customers.html')
});


app.get('/customers/:id_customer', (request, response) => {
    const found = customers.some(customers => customers.id_customer === parseInt(request.params.id_customer));
    if(found) {
        response.json(customers.filter(customers => customers.id_customer === parseInt(request.params.id_customer))
        );
    } else {
        response.status(400).json({ msg:'Ups! Customer not found with that ID' });
    }
});

app.get('/customers/type/:type', (request, response) => {
    const found = customers.some(customers => customers.type === (request.params.type));
    if(found) {
        response.json(customers.filter(customers => customers.type === (request.params.type))
        );
    } else {
        response.status(400).json({ msg:'Ups! Customer not found with that Attribute' });
    }
});


app.delete('/customers/delete/:id_customer', (request, response) => {
    const found = customers.some(customers => {
    customers.id_customer === parseInt(request.params.id_customer)
    })
    if(found) {
        response.json({
            msg: 'Customer ${request.params.id_customer} Deleted',
        });
    } else {
        response.status(400).json({ msg:'Ups! Customer not found with ID ${req.params.id}' });
    }
});