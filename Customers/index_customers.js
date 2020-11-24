const { request, response } = require('express');
const express = require('express');
const { dirname } = require('path');
const customers = require('./data_customers.json');
const path = require('path');

const app = express();

app.listen(8080, () => {
    console.log('Server:8080 OK')
});


app.get('/customers', (request, response) => {
    console.log(__dirname)
    response.sendFile(path.resolve(__dirname, 'customers.html'))
});






    app.get('/customers/all', (request, response) => {
        console.log(__dirname)
        response.sendFile(path.resolve(__dirname, 'data_customers.json'))
    });


    app.get('/customers/:id_customer', (request, response) => {
        console.log(__dirname)
        const found = customers.some(customers => customers.id_customer === parseInt(request.params.id_customer));

        if(found) {
            response.json(customers.filter(customers => customers.id_customer === parseInt(request.params.id_customer))
            );
        } else {
            response.status(400).json({ msg:'Ups! Customer not found with that ID' });
        }
    });


    app.get('/customers/type/:type', (request, response) => {
        console.log(__dirname)
        const found = customers.some(customers => customers.type === (request.params.type));

        if(found) {
            response.json(customers.filter(customers => customers.type === (request.params.type))
            );
        } else {
            response.status(400).json({ msg:'Ups! Customer not found with that Attribute' });
        }
    });




    app.delete('/customers/delete/:id_customer', (request, response) => {
        console.log(__dirname)
        const found = customers.some(customers => customers.id_customer === parseInt(request.params.id_customer));

        if(found) {
            response.json({
                msg: 'Customer Deleted',
                customers: customers.filter(customers => customers.id_customer !== parseInt(request.params.id_customer))
            });
        } else {
            response.status(400).json({ msg:'Ups! Customer not found with that ID' });
        }
    });