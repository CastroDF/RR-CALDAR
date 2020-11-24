const express = require('express');
const app = express();
const path = require('path');
const customers = require('./data_customers/data_customers.json');


app.listen(8080, () => {
    console.log('Server:8080 OK')
});

app.get('/customers', (request, response) => {
    console.log('Welcome to Customers page')
    response.sendFile(path.resolve('../Customers/customers.html'))
});


app.get('/customers/all', (request, response) => {
    console.log('All customers here')
    response.json(customers),
    response.sendFile('../Customers/customers.html')
});


app.get('/customers/:id_customer', (request, response) => {
    console.log(customers)
    const found = customers.some(customers => customers.id_customer === parseInt(request.params.id_customer));
    if(found) {
        response.json(customers.filter(customers => customers.id_customer === parseInt(request.params.id_customer))
        );
    } else {
        response.status(400).json({ msg:'Ups! Customer not found with that ID' });
    }
});

app.get('/customers/type/:type', (request, response) => {
    console.log(customers)
    const found = customers.some(customers => customers.type === (request.params.type));
    if(found) {
        response.json(customers.filter(customers => customers.type === (request.params.type))
        );
    } else {
        response.status(400).json({ msg:'Ups! Customer not found with that Attribute' });
    }
});


app.delete('/customers/delete/:id_customer', (request, response) => {
    console.log('Deleting Customer..')
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